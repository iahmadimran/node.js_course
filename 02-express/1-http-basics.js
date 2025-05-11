const http = require("http")

const server = http.createServer((req,res) => {
  const url = req.url;
  
  if (url === "/") {
    res.writeHead(200, { 'content-type': 'text/html'})
    res.write("<p>Hello guys you are at the home page now.</p>")
    res.end()
  } else if (url === "/about") {
    res.writeHead(200, { 'content-type': 'text/html'})
    res.write('<p>Hello guys you are at the about page now.</p>')
    res.end()
  } else {
    res.writeHead(404, {'content-type': 'text/html'})
    res.write("<p>The page you are looking for is not currently available</p>")
    res.end()
  }
})

server.listen(5000, () => {
  console.log("Server is listening to the port 5000.");
})
