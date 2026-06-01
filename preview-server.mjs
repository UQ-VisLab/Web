import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const port = 4174;
const types = new Map([
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".mp4", "video/mp4"],
]);

http.createServer((request, response) => {
  const url = new URL(request.url, `http://127.0.0.1:${port}`);
  const relative = decodeURIComponent(
    url.pathname === "/" || url.pathname.endsWith("/") ? `${url.pathname}index.html` : url.pathname
  );
  const file = path.resolve(root, `.${relative}`);

  if (!file.startsWith(root)) {
    response.writeHead(403).end("Forbidden");
    return;
  }

  fs.readFile(file, (error, data) => {
    if (error) {
      response.writeHead(404, { "content-type": "text/plain; charset=utf-8" }).end("Not found");
      return;
    }

    response.writeHead(200, {
      "cache-control": "no-store",
      "content-type": types.get(path.extname(file).toLowerCase()) || "application/octet-stream",
    });
    response.end(data);
  });
}).listen(port, "127.0.0.1", () => {
  console.log(`VisLab preview server: http://127.0.0.1:${port}/`);
});
