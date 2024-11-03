import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhElecdysNote = defineNoteConfig({
  dir: 'Elecdys',
  link: '/Elecdys/',
  sidebar: 'auto',
})

const zhMathNote = defineNoteConfig({
  dir: 'Math',
  link: '/Math/',
  sidebar: 'auto',
})

const zhPhysicsNote = defineNoteConfig({
  dir: 'Physics',
  link: '/Physics/',
  sidebar: 'auto',
})

const zhMechanicsNote = defineNoteConfig({
  dir: 'Mechanics',
  link: '/Mechanics/',
  sidebar: 'auto',
})

const zhStatsanicsNote = defineNoteConfig({
  dir: 'Statsanics',
  link: '/Statsanics/',
  sidebar: 'auto',
})

const zhQuantumNote = defineNoteConfig({
  dir: 'Quantum',
  link: '/Quantum/',
  sidebar: 'auto',
})

const zhFieldtNote = defineNoteConfig({
  dir: 'Fieldt',
  link: '/Fieldt/',
  sidebar: 'auto',
})

const zhGrouptNote = defineNoteConfig({
  dir: 'Groupt',
  link: '/Groupt/',
  sidebar: 'auto',
})

const zhCalvecNote = defineNoteConfig({
  dir: 'Calvec',
  link: '/Calvec/',
  sidebar: 'auto',
})

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    zhMathNote,
    zhPhysicsNote,
    zhElecdysNote,
    zhMechanicsNote,
    zhQuantumNote,
    zhStatsanicsNote,
    zhFieldtNote,
    zhGrouptNote,
    zhCalvecNote,
  ],
})

/* =================== locale: en-US ======================= */

const enEngNote = defineNoteConfig({
  dir: 'English',
  link: '/English/',
  sidebar: 'auto',
})

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/',
  notes: [enEngNote],
})