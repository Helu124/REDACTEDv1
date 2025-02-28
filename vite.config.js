import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/REDACTEDv1/',  // Change this to match your repo name
  plugins: [react()],
});

