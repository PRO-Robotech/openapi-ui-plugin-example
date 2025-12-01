import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'plugin-example', // remote name
      filename: 'remoteEntry.js', // output file the host will load
      exposes: {
        './App': './src/App.tsx', // must match what host calls getRemote()
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
  },
})
