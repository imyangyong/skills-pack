import { lstat, mkdir, readdir, readlink, realpath, rm, symlink } from 'node:fs/promises'
import { homedir } from 'node:os'
import { join } from 'node:path'
import process from 'node:process'
import { cancel, intro, isCancel, log, multiselect, outro } from '@clack/prompts'

const root = join(import.meta.dirname, '..')
const targets = [join(homedir(), '.agents/skills'), join(homedir(), '.claude/skills')]

interface Candidate {
  name: string
  src: string
}

// 收集 .agents/skills 下的 skills；.claude/skills 里大多是 -> .agents 的软链，
// 按 realpath 去重后只会剩下独立存在的 skills；跨来源同名冲突时保留先出现者并警告
async function collect(): Promise<Candidate[]> {
  const seenSrc = new Set<string>()
  const seenName = new Set<string>()
  const out: Candidate[] = []
  for (const dir of ['.agents/skills', '.claude/skills']) {
    let entries
    try {
      entries = await readdir(join(root, dir), { withFileTypes: true })
    }
    catch {
      continue // 目录不存在
    }
    for (const entry of entries) {
      if (!entry.isDirectory() && !entry.isSymbolicLink())
        continue // 跳过 .DS_Store 等常规文件
      const src = await realpath(join(root, dir, entry.name)).catch(() => null)
      if (!src || seenSrc.has(src))
        continue
      if (seenName.has(entry.name)) {
        log.warn(`${entry.name} 在多个来源中存在不同目录，跳过 ${src}（请手动处理）`)
        continue
      }
      seenSrc.add(src)
      seenName.add(entry.name)
      out.push({ name: entry.name, src })
    }
  }
  return out.sort((a, b) => a.name.localeCompare(b.name))
}

const candidates = await collect()
if (!candidates.length) {
  log.error('未找到任何 skills（.agents/skills 与 .claude/skills 均为空）')
  process.exit(1)
}

async function isLinked(c: Candidate) {
  for (const t of targets) {
    const current = await readlink(join(t, c.name)).catch(() => null)
    if (current === c.src)
      return true
  }
  return false
}

intro('同步 skills 到全局')

const selected = await multiselect({
  message: '选择要同步的 skills（空格选择，回车确认）',
  options: await Promise.all(candidates.map(async c => ({
    value: c,
    label: await isLinked(c) ? `${c.name}（已链接）` : c.name,
  }))),
  required: false,
})
if (isCancel(selected)) {
  cancel('已取消')
  process.exit(0)
}
if (!selected.length) {
  outro('未选择任何 skill')
  process.exit(0)
}

for (const t of targets)
  await mkdir(t, { recursive: true })

for (const c of selected) {
  for (const t of targets) {
    const link = join(t, c.name)
    const st = await lstat(link).catch(() => null)
    if (st?.isSymbolicLink()) {
      if (await readlink(link) === c.src) {
        log.info(`${link} 已是最新`)
        continue
      }
      await rm(link) // 指向别处的旧软链，替换
    }
    else if (st) {
      log.warn(`${link} 是真实目录/文件，跳过（请手动处理）`)
      continue
    }
    await symlink(c.src, link)
    log.success(`${link} -> ${c.src}`)
  }
}

outro('完成')
