import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    passWithNoTests: true,
  },

  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
})
