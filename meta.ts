export interface Source {
  /** Any source the `skills` CLI accepts: `owner/repo`, `owner/repo/sub/path`, ... */
  source: string
  category: string
  /** Skill names to pick; omitted means every skill in the source. */
  skills?: string[]
}

export const sources: Source[] = [
  {
    source: 'imyangyong/skills',
    category: 'Workflow',
    skills: [
      'code-review',
      'yong-coding-preferences',
      'decode-terms',
      'optimize-code',
    ],
  },
  {
    source: 'larksuite/cli',
    category: 'Workflow',
    skills: [
      'lark-apps',
      'lark-base',
      'lark-calendar',
      'lark-contact',
      'lark-doc',
      'lark-drive',
      'lark-im',
      'lark-meeting',
      'lark-okr',
      'lark-openapi-explorer',
      'lark-shared',
      'lark-task',
      'lark-whiteboard',
      'lark-wiki',
      'lark-workflow-meeting-summary',
    ],
  },
  {
    source: 'mattpocock/skills',
    category: 'Workflow',
    skills: [
      'setup-matt-pocock-skills',
      'grill-me',
      'grilling',
      'grill-with-docs',
      'to-spec',
      'to-tickets',
      'implement-spec',
      'implement',
      'handoff',
      'to-questionnaire',
      'writing-for-agents',
      'wait-what',
      'teach',
      'codebase-design',
      'research',
      'retro',
      'tdd',
      'diagnosing-bugs',
      'domain-modeling',
      'wayfinder',
    ],
  },
  {
    source: 'shadcn/improve',
    category: 'Workflow',
  },
  {
    source: 'kucherenko/jscpd/skills/dry-refactoring',
    category: 'Workflow',
  },
  {
    source: 'AminBlg/SimpleEnglish',
    category: 'Writing',
  },
  {
    source: 'cursor/plugins/pstack/skills/unslop',
    category: 'Writing',
  },
  {
    source: 'ayghri/i-have-adhd',
    category: 'Writing',
  },
  {
    source: 'antfu/skills',
    category: 'Workflow',
    skills: [
      'antfu',
      'antfu-create-pr',
      'antfu-issue-triage',
    ],
  },
  {
    source: 'vuejs-ai/skills',
    category: 'Vue & Nuxt',
    skills: [
      'vue-best-practices',
      'vue-router-best-practices',
      'vue-pinia-best-practices',
      'vue-testing-best-practices',
      'vue-debug-guides',
      'create-adaptable-composable',
    ],
  },
  {
    source: 'onmax/nuxt-skills',
    category: 'Vue & Nuxt',
    skills: [
      'nuxt-modules',
    ],
  },
  {
    source: 'anthropics/skills/skills/frontend-design',
    category: 'Design',
  },
  {
    source: 'vercel-labs/agent-browser',
    category: 'Browser',
  },
]
