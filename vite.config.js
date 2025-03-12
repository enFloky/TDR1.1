import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/TDR1.1/', // IMPORTANT: ha de coincidir amb el nom del repositori
});
