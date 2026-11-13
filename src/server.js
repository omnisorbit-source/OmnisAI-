import http from "node:http";

const port = Number(process.env.PORT || 8080);

const server = http.createServer((req, res) => {
  const path = req.url?.split("?")[0] ?? "/";

  if (path === "/health") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ ok: true, name: "omnis-ai" }));
    return;
  }

  res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  res.end("Omnis AI\n");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Omnis AI listening on ${port}`);
});
