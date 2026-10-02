import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

function photoUploadPlugin() {
  return {
    name: 'photo-upload-plugin',
    configureServer(server: any) {
      server.middlewares.use('/api/save-photo', (req: any, res: any) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              const { slotKey, base64 } = data;
              if (slotKey && base64) {
                const matches = base64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
                const buffer = Buffer.from(matches ? matches[2] : base64, 'base64');
                const photosDir = path.resolve(__dirname, 'public/photos');
                if (!fs.existsSync(photosDir)) {
                  fs.mkdirSync(photosDir, { recursive: true });
                }
                const outPath = path.resolve(photosDir, `${slotKey}.jpg`);
                fs.writeFileSync(outPath, buffer);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, path: `/photos/${slotKey}.jpg` }));
                return;
              }
            } catch (err) {
              console.error('Error saving photo:', err);
            }
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false }));
          });
        } else {
          res.writeHead(405);
          res.end();
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), photoUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
