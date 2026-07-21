const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      status: "success",
      message: "Welcome to MYCHA AI Genesis API 🚀",
    })
  );
});

server.listen(PORT, () => {
  console.log(`MYCHA AI Server running on port ${PORT}`);
});
