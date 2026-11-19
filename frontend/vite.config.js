import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages sirve proyectos en /nombre-del-repositorio/.
// En desarrollo local y en un repositorio <usuario>.github.io se usa /.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
const projectPages = process.env.GITHUB_ACTIONS === 'true' && repo && !repo.endsWith('.github.io');

export default defineConfig({
  plugins: [react()],
  base: projectPages ? `/${repo}/` : '/',
});
