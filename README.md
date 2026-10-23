# @antfu/skills

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

Anthony's curated agent skills.

A hand-picked set of [agent skills](https://agentskills.io) from across the ecosystem, declared in one npm package so a project gets all of them with a single install. 

Powered by [skills-npm](https://github.com/antfu/skills-npm).

## Setup

Install [skills-npm](https://github.com/antfu/skills-npm) and this pack as dev dependencies, then let skills-npm wire itself into your `prepare` script:

```bash
pnpm i -D skills-npm @antfu/skills
pnpx skills-npm setup
```

`setup` adds `"prepare": "skills-npm"` to your `package.json` and runs the first sync. From then on every `npm install` keeps the skills in sync. It would looks like this

```json
{
  "scripts": {
    "prepare": "skills-npm"
  },
  "devDependencies": {
    "skills-npm": "^4.0.0",
    "@antfu/skills": "^1.0.0"
  }
}
```

What you get:

- Every skill listed below is installed into `.agents/skills/<name>` and linked into the skill directories of the agents detected on your machine (Claude Code, Cursor, OpenCode, Codex, ...). Pass `--agents claude-code,cursor` to choose explicitly.
- `skills-npm-lock.json` and `skills-lock.json` record what came from where. Commit them.
- Removing `@antfu/skills` from your dependencies removes the skills on the next sync.

The pack tracks each upstream's default branch. To pull in the latest upstream changes without waiting for a new pack release:

```bash
pnpx skills update
```

## Skills

<!-- skills:start -->

### Workflow

| Skill | Description | Source |
| --- | --- | --- |
| [code-review](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/code-review/SKILL.md) | Review the changes since a fixed point (commit, branch, tag, or merge-base) along two axes: Standards (does the code follow this repo's documented coding standards?) and Spec (does the code match what the originating issue/spec asked for?). | [imyangyong/skills](https://github.com/imyangyong/skills) |
| [yong-coding-preferences](https://github.com/imyangyong/skills/blob/HEAD/skills/yong-coding-preferences/SKILL.md) | 应用 Yong 的个人编码偏好。在实现、修改、重构或审查代码时使用。 | [imyangyong/skills](https://github.com/imyangyong/skills) |
| [decode-terms](https://github.com/imyangyong/skills/blob/HEAD/skills/decode-terms/SKILL.md) | 语境解码职场、互联网、技术和日常表达，说明陌生词语、缩写、黑话、隐喻与话术在具体上下文中的实际含义、隐含意图和自然回应。用于用户询问某个词、短语或说法“什么意思”“实际指什么”“为什么这么说”，或表示看不懂、不理解某种表达时。 | [imyangyong/skills](https://github.com/imyangyong/skills) |
| [optimize-code](https://github.com/imyangyong/skills/blob/HEAD/skills/optimize-code/SKILL.md) | 优化已实现好的存量代码。两阶段：先按六个角度全面分析并输出分级清单，用户圈选确认后再逐条修改。 | [imyangyong/skills](https://github.com/imyangyong/skills) |
| [lark-apps](https://github.com/larksuite/cli/blob/HEAD/skills/lark-apps/SKILL.md) | 妙搭（Spark/Miaoda）应用开发与托管：应用创建、本地全栈开发、云端生成迭代、创意设计（UI mockup / 可交互原型 / 线框图 / 落地页 / 仪表盘 / 幻灯片 deck / 视觉探索）、AI相关能力和飞书平台能力或者其他外部能力集成、日志/Trace/监控指标/PV/UV 查询、环境变量管理、应用协作者与协作权限设置、应用角色与成员管理、自动化触发器（定时/记录变更/Webhook/飞书审批）。当用户要开发/新建一个系统·工具·平台·应用，或要本地开发 / 云端开发 / 修改 / 部署 / 发布 / 上线 / 拿可分享链接，或用 HTML 做页面·网站·部署到妙搭，或要设计 / design / mockup / prototype / wireframe / 做 PPT / deck / 视觉探索，或提到妙搭/Spark/Miaoda 应用（链接形如 `/app/app_xxx` 或 `/page/<token>`，运行时域名形如 *.aiforce.cloud）、应用数据库、应用文件存储、开放 API Key、可见范围、应用协作者/开发权限、应用角色/角色成员、线上日志、接口请求量、错误量、延迟、访问量、环境变量、给妙搭应用配自动化任务/定时触发/审批通过后自动触发时使用。不负责普通云盘文件上传（lark-drive）、飞书文档编辑（lark-doc）、原生幻灯片创建（lark-slides）。 | [larksuite/cli](https://github.com/larksuite/cli) |
| [lark-base](https://github.com/larksuite/cli/blob/HEAD/skills/lark-base/SKILL.md) | 飞书多维表格（Base）操作：建表、字段、记录、视图、统计、公式/lookup、表单、仪表盘、应用模式（BaseApp/AppMode 页面与组件）、Workspace 目录、workflow、角色权限、模板中心（多维表格模板分类/列表/搜索）；遇到 Base/多维表格/bitable、BaseApp/AppMode、/base/ 或 /app/ 链接时使用。BaseApp 不走 lark-apps；文件导入/导出转 lark-drive，认证/授权转 lark-shared。 | [larksuite/cli](https://github.com/larksuite/cli) |
| [lark-calendar](https://github.com/larksuite/cli/blob/HEAD/skills/lark-calendar/SKILL.md) | 飞书日历：管理日历日程和会议室。查看/搜索日程、创建/更新日程、管理参会人、查询忙闲和推荐时段、预定会议室。当用户需要查看日程安排、创建/修改会议、查询/预定会议室时使用。不负责：查询过去的视频会议记录（走 lark-meeting）、待办任务（走 lark-task）。 | [larksuite/cli](https://github.com/larksuite/cli) |
| [lark-contact](https://github.com/larksuite/cli/blob/HEAD/skills/lark-contact/SKILL.md) | 飞书 / Lark 通讯录:按姓名 / 邮箱解析成 open_id,或按 open_id 反查姓名 / 部门 / 邮箱 / 联系方式 / 个人状态 / 签名,以及按关键词搜索当前用户可见的机器人 / 智能体(agent)。当用户提到一个名字要下一步发消息 / 排日程,或拿到 open_id 想查具体信息时使用。不负责部门树遍历、按部门列员工、组织架构图,这类需求走原生 OpenAPI。 | [larksuite/cli](https://github.com/larksuite/cli) |
| [lark-doc](https://github.com/larksuite/cli/blob/HEAD/skills/lark-doc/SKILL.md) | 飞书云文档（Docx / Wiki）内容操作：读取、创建、编辑文档，插入或下载图片附件，以及操作思维笔记。用户提供文档 URL/token（包括 doubao.com 的 /docx/、/wiki/）时使用；按 URL 路径/token 而非域名路由；`/page/<token>` 是妙搭应用，非飞书云文档。文档内嵌资源按读取参考中的统一规则分流。独立评论操作走 lark-drive；随正文读取评论使用 docs +fetch。表格或 Base 内部数据操作不在本 skill。 | [larksuite/cli](https://github.com/larksuite/cli) |
| [lark-drive](https://github.com/larksuite/cli/blob/HEAD/skills/lark-drive/SKILL.md) | 飞书云空间（云盘/云存储）：管理 Drive 文件和文件夹，包含上传/下载、创建文件夹、复制/移动/删除、查看元数据、查询权限设置、评论/权限/订阅、标题、版本、飞书文档密级标签（secure labels）和本地文件导入。用户需要整理云盘目录、处理云空间资源 URL/token、判断链接类型/真实 token/标题，或导入 Word/Markdown/Excel/CSV/PPTX/.base 为 docx/sheet/bitable/slides 时使用；doubao.com 云空间 URL/token 也按资源路径和 token 路由，不回退 WebFetch。不负责：文档内容编辑（走 lark-doc）、表格/Base 表内数据操作（走 lark-sheets/lark-base）、知识空间节点/成员管理（走 lark-wiki）、原生 Markdown 文件读写/patch/diff（走 lark-markdown）。 | [larksuite/cli](https://github.com/larksuite/cli) |
| [lark-im](https://github.com/larksuite/cli/blob/HEAD/skills/lark-im/SKILL.md) | 飞书即时通讯：收发消息和管理群聊。发送和回复消息、搜索聊天记录、管理群聊成员、上传下载图片和文件、管理表情回复、发送应用内/短信/电话加急、发送和处理交互卡片（Interactive Card）、监听卡片按钮回调（card.action.trigger）。当用户需要发消息、查看或搜索聊天记录、下载聊天中的文件、查看群成员、搜索群、创建群聊或话题群、管理标记数据、管理 Feed 置顶（添加/移除/查询置顶会话）、管理标签数据、处理卡片回调时使用。 | [larksuite/cli](https://github.com/larksuite/cli) |
| [lark-meeting](https://github.com/larksuite/cli/blob/HEAD/skills/lark-meeting/SKILL.md) | 飞书视频会议：查询会议记录与会议产物(纪要/逐字稿/妙记)、妙记搜索/上传/下载/编辑、机器人参与会议；查询进行中的会议、实时会议内容(发言/聊天/共享文档)问答(会上/会里)、发送会中聊天/表情；基于 meeting_id、meeting_no、event_id、note_id、minute_token、vc-node-id 或妙记 URL 查询相关信息。预约会议、忙闲和会议室管理走 lark-calendar。 | [larksuite/cli](https://github.com/larksuite/cli) |
| [lark-okr](https://github.com/larksuite/cli/blob/HEAD/skills/lark-okr/SKILL.md) | 飞书 OKR：管理目标与关键结果。查看和编辑 OKR 周期、目标、关键结果、对齐关系、量化指标和进展记录。当用户需要查看或创建 OKR、管理目标和关键结果、查看对齐关系时使用。不负责：待办任务管理（lark-task）、日程/会议安排（lark-calendar）、绩效评估 | [larksuite/cli](https://github.com/larksuite/cli) |
| [lark-openapi-explorer](https://github.com/larksuite/cli/blob/HEAD/skills/lark-openapi-explorer/SKILL.md) | 飞书/Lark 原生 OpenAPI 探索：从官方文档库中挖掘未经 CLI 封装的原生 OpenAPI 接口。当用户的需求无法被现有 lark-* skill 或 lark-cli 已注册命令满足，需要查找并调用原生飞书 OpenAPI 时使用。 | [larksuite/cli](https://github.com/larksuite/cli) |
| [lark-shared](https://github.com/larksuite/cli/blob/HEAD/skills/lark-shared/SKILL.md) | Use for lark-cli setup/auth tasks: auth login/status/logout, user vs bot identity, business-domain permissions (--domain, including all/docs/drive), missing scopes, revoking authorization, or handling _notice JSON. | [larksuite/cli](https://github.com/larksuite/cli) |
| [lark-task](https://github.com/larksuite/cli/blob/HEAD/skills/lark-task/SKILL.md) | 飞书任务：管理任务、清单和任务智能体。创建待办任务、查看和更新任务状态、拆分子任务、组织任务清单、分配协作成员、上传任务附件、注册或注销任务智能体、更新任务智能体的主页数据、写入智能体任务记录。当用户需要创建待办事项、查看任务列表、跟踪任务进度、管理项目清单或给他人分配任务、为任务上传附件文件、注册注销任务智能体、更新智能体主页数据、写入任务记录时使用。 | [larksuite/cli](https://github.com/larksuite/cli) |
| [lark-whiteboard](https://github.com/larksuite/cli/blob/HEAD/skills/lark-whiteboard/SKILL.md) | 飞书画板：查询和编辑飞书云文档中的画板。支持导出画板为预览图片、导出原始节点结构、使用多种格式更新画板内容。 当用户需要查看画板内容、导出画板图片、编辑画板时使用此 skill。不负责：飞书云文档内容编辑（lark-doc）、文档内嵌电子表格/Base（lark-sheets / lark-base）。 | [larksuite/cli](https://github.com/larksuite/cli) |
| [lark-wiki](https://github.com/larksuite/cli/blob/HEAD/skills/lark-wiki/SKILL.md) | 飞书知识库：管理知识空间、空间成员和文档节点。创建和查询知识空间、查看和管理空间成员、管理节点层级结构、在知识库中组织文档和快捷方式。当用户需要在知识库中查找或创建文档、浏览知识空间结构、查看或管理空间成员、移动或复制节点时使用。当用户给出 doubao.com 的 /wiki/ URL/token 时，也应直接使用本 skill，不要因为域名不是飞书而回退到 WebFetch；路由依据是 URL 路径模式和 token，而不是域名。不负责：上传文件到知识库节点下（走 lark-drive）、编辑文档/表格/Base 内容（走 lark-doc / lark-sheets / lark-base）。 | [larksuite/cli](https://github.com/larksuite/cli) |
| [lark-workflow-meeting-summary](https://github.com/larksuite/cli/blob/HEAD/skills/lark-workflow-meeting-summary/SKILL.md) | 会议纪要整理工作流：汇总指定时间范围内的会议纪要并生成结构化报告。当用户需要整理会议纪要、生成会议周报、回顾一段时间内的会议内容时使用。 | [larksuite/cli](https://github.com/larksuite/cli) |
| [setup-matt-pocock-skills](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/setup-matt-pocock-skills/SKILL.md) | Configure this repo for the engineering skills: set up its issue tracker, triage label vocabulary, and domain doc layout. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [grill-me](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/grill-me/SKILL.md) | A relentless interview to sharpen a plan or design. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [grilling](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/grilling/SKILL.md) | Grill the user relentlessly about a plan, decision, or idea. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [grill-with-docs](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/grill-with-docs/SKILL.md) | A relentless interview to sharpen a plan or design, which also creates docs (ADR's and glossary) as we go. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [to-spec](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/to-spec/SKILL.md) | Turn the current conversation into a spec and publish it to the project issue tracker: no interview, just synthesis of what you've already discussed. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [to-tickets](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/to-tickets/SKILL.md) | Break a plan, spec, or the current conversation into a set of tracer-bullet tickets, each declaring its blocking edges, published to the configured tracker (edges as text in one file per ticket locally, or native blocking links on a real tracker). | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [implement-spec](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/implement-spec/SKILL.md) | Implement the result of /to-spec and /to-tickets in code. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [implement](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/implement/SKILL.md) | Implement a piece of work based on a spec or set of tickets. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [handoff](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/handoff/SKILL.md) | Compact the current conversation into a handoff document for another agent to pick up. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [to-questionnaire](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/to-questionnaire/SKILL.md) | Turn a decision you can't fully answer into a questionnaire for someone else to fill in. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [writing-for-agents](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/writing-for-agents/SKILL.md) | Writing documents for agents. Use when creating or editing skills, or modifying AGENTS.md or CLAUDE.md. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [wait-what](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/wait-what/SKILL.md) | Stop. That last message did not land: re-pitch it. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [teach](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/teach/SKILL.md) | Teach the user a new skill or concept, within this workspace. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [codebase-design](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/codebase-design/SKILL.md) | Shared vocabulary for designing deep modules. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [research](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/research/SKILL.md) | Investigate a question against high-trust primary sources and capture the findings as a Markdown file in the repo. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [retro](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/retro/SKILL.md) | Conduct a retrospective on a coding session. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [tdd](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/tdd/SKILL.md) | Test-driven development. Use when the user wants to build features or fix bugs test-first, mentions "red-green-refactor", or wants integration tests. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [diagnosing-bugs](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/diagnosing-bugs/SKILL.md) | Diagnosis loop for hard bugs and performance regressions. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [domain-modeling](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/domain-modeling/SKILL.md) | Build and sharpen a project's domain model. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [wayfinder](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/wayfinder/SKILL.md) | Plan a huge chunk of work (more than one agent session can hold) as a shared map of decision tickets on your issue tracker, and resolve them one at a time until the way to the destination is clear. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [improve](https://github.com/shadcn/improve/blob/HEAD/skills/improve/SKILL.md) | Survey any codebase as a senior advisor and produce prioritized, self-contained implementation plans for OTHER models/agents to execute. | [shadcn/improve](https://github.com/shadcn/improve) |
| [dry-refactoring](https://github.com/kucherenko/jscpd/blob/HEAD/skills/dry-refactoring/SKILL.md) | Guided workflow to eliminate copy-paste duplication detected by jscpd. | [kucherenko/jscpd](https://github.com/kucherenko/jscpd/tree/HEAD/skills/dry-refactoring) |
| [antfu](https://github.com/antfu/skills/blob/HEAD/skills/antfu/SKILL.md) | Anthony Fu's opinionated tooling and conventions for JavaScript/TypeScript projects. | [antfu/skills](https://github.com/antfu/skills) |
| [antfu-create-pr](https://github.com/antfu/skills/blob/HEAD/skills/antfu-create-pr/SKILL.md) | Create a reviewable GitHub pull request from the current branch with a Conventional Commits title, a concise evidence-based body, and before/after screenshots for UI changes. | [antfu/skills](https://github.com/antfu/skills) |
| [antfu-issue-triage](https://github.com/antfu/skills/blob/HEAD/skills/antfu-issue-triage/SKILL.md) | Triage open issues and PRs of the current GitHub repo - find already-fixed, duplicate, and spam items, suggest labels, gauge demand from reactions and comments, then present a table of proposed actions and comments for confirmation before touching anything. | [antfu/skills](https://github.com/antfu/skills) |

### Writing

| Skill | Description | Source |
| --- | --- | --- |
| [simple-english](https://github.com/AminBlg/SimpleEnglish/blob/HEAD/skills/simple-english/SKILL.md) | Write or rewrite text in plain, layman-readable English in the spirit of ASD-STE100 Simplified Technical English: short sentences, active voice, simple tenses, one word one meaning, condition before command, every technical term defined at first use, no AI slop. | [AminBlg/SimpleEnglish](https://github.com/AminBlg/SimpleEnglish) |
| [unslop](https://github.com/cursor/plugins/blob/HEAD/pstack/skills/unslop/SKILL.md) | Cut AI tells from any writing. Must always apply. | [cursor/plugins](https://github.com/cursor/plugins/tree/HEAD/pstack/skills/unslop) |
| [i-have-adhd](https://github.com/ayghri/i-have-adhd/blob/HEAD/skills/i-have-adhd/SKILL.md) | Shape output for a reader with ADHD: lead with the next action, number multi-step work, restate state across turns, suppress tangents, give specific time estimates, make wins visible. | [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) |

### Vue & Nuxt

| Skill | Description | Source |
| --- | --- | --- |
| [vue-best-practices](https://github.com/vuejs-ai/skills/blob/HEAD/skills/vue-best-practices/SKILL.md) | MUST be used for Vue.js tasks. Strongly recommends Composition API with `<script setup>` and TypeScript as the standard approach. | [vuejs-ai/skills](https://github.com/vuejs-ai/skills) |
| [vue-router-best-practices](https://github.com/vuejs-ai/skills/blob/HEAD/skills/vue-router-best-practices/SKILL.md) | Vue Router 4 patterns, navigation guards, route params, and route-component lifecycle interactions. | [vuejs-ai/skills](https://github.com/vuejs-ai/skills) |
| [vue-pinia-best-practices](https://github.com/vuejs-ai/skills/blob/HEAD/skills/vue-pinia-best-practices/SKILL.md) | Pinia stores, state management patterns, store setup, and reactivity with stores. | [vuejs-ai/skills](https://github.com/vuejs-ai/skills) |
| [vue-testing-best-practices](https://github.com/vuejs-ai/skills/blob/HEAD/skills/vue-testing-best-practices/SKILL.md) | Use for Vue.js testing. Covers Vitest, Vue Test Utils, component testing, mocking, testing patterns, and Playwright for E2E testing. | [vuejs-ai/skills](https://github.com/vuejs-ai/skills) |
| [vue-debug-guides](https://github.com/vuejs-ai/skills/blob/HEAD/skills/vue-debug-guides/SKILL.md) | Vue 3 debugging and error handling for runtime errors, warnings, async failures, and SSR/hydration issues. | [vuejs-ai/skills](https://github.com/vuejs-ai/skills) |
| [create-adaptable-composable](https://github.com/vuejs-ai/skills/blob/HEAD/skills/create-adaptable-composable/SKILL.md) | Create a library-grade Vue composable that accepts maybe-reactive inputs (MaybeRef / MaybeRefOrGetter) so callers can pass a plain value, ref, or getter. | [vuejs-ai/skills](https://github.com/vuejs-ai/skills) |
| [nuxt-modules](https://github.com/onmax/nuxt-skills/blob/HEAD/skills/nuxt-modules/SKILL.md) | Use when creating Nuxt modules: (1) Published npm modules (@nuxtjs/, nuxt-), (2) Local project modules (modules/ directory), (3) Runtime extensions (components, composables, plugins), (4) Server extensions (API routes, middleware), (5) Releasing/publishing modules to npm, (6) Setting up CI/CD workflows for modules. | [onmax/nuxt-skills](https://github.com/onmax/nuxt-skills) |

### Design

| Skill | Description | Source |
| --- | --- | --- |
| [frontend-design](https://github.com/anthropics/skills/blob/HEAD/skills/frontend-design/SKILL.md) | Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. | [anthropics/skills](https://github.com/anthropics/skills/tree/HEAD/skills/frontend-design) |

### Browser

| Skill | Description | Source |
| --- | --- | --- |
| [agent-browser](https://github.com/vercel-labs/agent-browser/blob/HEAD/skills/agent-browser/SKILL.md) | Browser automation CLI for AI agents. Use when the user needs to interact with websites, including navigating pages, filling forms, clicking buttons, taking screenshots, extracting data, testing web apps, or automating any browser task. | [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) |

<!-- skills:end -->

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg" alt="Sponsors"/>
  </a>
</p>

## License

[MIT](./LICENSE) License © [Anthony Fu](https://github.com/antfu)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@antfu/skills?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmx.dev/package/@antfu/skills
[npm-downloads-src]: https://img.shields.io/npm/dm/@antfu/skills?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmx.dev/package/@antfu/skills
[license-src]: https://img.shields.io/github/license/antfu/skills-pack.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/antfu/skills-pack/blob/main/LICENSE
