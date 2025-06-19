// sanity.config.ts or .js
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'portfoio1',

  projectId: 'g7styzy6',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  // 👇 FIX: Prevent Vite from loading parent PostCSS
  vite: {
    css: {
      postcss: {
        plugins: [], // ignore broken plugins from parent
      },
    },
  },
})
