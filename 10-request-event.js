const http = require("http")

const server = http.createServer()

server.on("request", (req, res) => {
  res.end("Hello World.....")
})

server.listen(5000)