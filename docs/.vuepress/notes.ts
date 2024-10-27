import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhElecdysNote = defineNoteConfig({
  dir: 'Elecdys',
  link: '/Elecdys',
  sidebar: 'auto',
})

const zhMathNote = defineNoteConfig({
  dir: 'Math',
  link: '/Math',
  sidebar: 'auto',
})

const zhPhysicsNote = defineNoteConfig({
  dir: 'Physics',
  link: '/Physics',
  sidebar: 'auto',
})

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [zhElecdysNote,zhMathNote,zhPhysicsNote],
})

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [enDemoNote],
})

