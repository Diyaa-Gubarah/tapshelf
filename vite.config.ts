import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/tapshelf/', // Replace 'your-repo-name' with your actual repository name
  plugins: [react()],
});
