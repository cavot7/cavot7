const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const root = path.join(__dirname, 'public');
http.createServer(async (req, res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname;
  const files = {'/':'index.html','/app.js':'app.js','/style.css':'style.css'};
  if (!files[pathname]) { res.writeHead(404); return res.end('No encontrado'); }
  try {
    const data = await fs.readFile(path.join(root, files[pathname]));
    res.writeHead(200, {'Content-Type': pathname.endsWith('.js') ? 'text/javascript; charset=utf-8' : pathname.endsWith('.css') ? 'text/css; charset=utf-8' : 'text/html; charset=utf-8', 'X-Content-Type-Options':'nosniff'});
    res.end(data);
  } catch { res.writeHead(500); res.end('No se pudo cargar la aplicación'); }
}).listen(process.env.PORT || 3000, '0.0.0.0', () => console.log('Camino de Fe iniciado en puerto ' + (process.env.PORT || 3000)));
