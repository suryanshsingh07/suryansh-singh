import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const isGhPages = process.env.DEPLOY_ENV === 'GH_PAGES'
const repoName = 'suryansh-singh'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: isGhPages ? `/${repoName}/` : '/',
});
