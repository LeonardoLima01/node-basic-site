let http = require("http");
let path = require("path");
let fs = require("fs");

let filePath = "";

server = http.createServer((req, res) => {
  if (req.url === "/") filePath = path.join(__dirname, "public", "index.html");
  else if (req.url === "/about")
    filePath = path.join(__dirname, "public", "about.html");
  else if (req.url === "/contact-me")
    filePath = path.join(__dirname, "public", "contact-me.html");
  else filePath = path.join(__dirname, "public", "404.html");

  fs.readFile(filePath, (err, data) => {
    if (err) throw err;

    res.setHeader("Content-Type", "text/html");
    res.end(data);
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log("Server open at http://localhost:3000");
});
