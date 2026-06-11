import { defineConfig } from 'vite';

export default defineConfig({
    base: '/DigiAPi/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                manualChunks: undefined,
            },
        },
    },
});
