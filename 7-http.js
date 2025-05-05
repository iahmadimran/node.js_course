const http = require('http');

const server = http.createServer((req, res) => {
  
  if (req.url === "/") {
    res.write("Welcome to my web page.")
    res.end()
  } else if (req.url === "/contact") {
    res.write("Contact us on this email @ahmadimran67208@gmail.com.")
    res.end()
  } else {
    res.write("The page you are looking for is not available...")
    res.end()
  }
  console.log(req);
})

server.listen('5000')

