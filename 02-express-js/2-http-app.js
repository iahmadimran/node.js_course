const http = require("http")
const { readFileSync } = require('fs')

const homeHtml = readFileSync('./navbar-app/index.html', 'utf8')
const homeStyles = readFileSync('./navbar-app/styles.css', 'utf8')
const homeLogo = readFileSync('./navbar-app/logo.svg', 'utf8')
const homeLogic = readFileSync('./navbar-app/browser-app.js', 'utf8')

const server = http.createServer((req,res) => {
  const url = req.url;
  
  if (url === "/") {
    res.writeHead(200, { 'content-type': 'text/html'})
    res.write(homeHtml)
    res.end()
  } 
  else if (url === "/about") {
    res.writeHead(200, { 'content-type': 'text/html'})
    res.write('<p>Hello guys you are at the about page now.</p>')
    res.end()
  } 
  else if (url === "/styles.css") {
    res.writeHead(200, { 'content-type': 'text/css'})
    res.write(homeStyles)
    res.end()
  } 
  else if (url === "/logo.svg") {
    res.writeHead(200, { 'content-type': 'image/svg+xml'})
    res.write(homeLogo)
    res.end()
  } 
  else if (url === "/browser-app.js") {
    res.writeHead(200, { 'content-type': 'text/javascript'})
    res.write(homeLogic)
    res.end()
  } 
  else {
    res.writeHead(404, {'content-type': 'text/html'})
    res.write("<p>The page you are looking for is not currently available</p>")
    res.end()
  }
})

server.listen(4000, () => {
  console.log("Server is listening to the port 6000.");
})
