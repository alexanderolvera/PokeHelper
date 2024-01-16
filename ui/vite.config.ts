import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  envDir: './environments',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '#root': resolve(__dirname)
    }
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version)
  }
});
