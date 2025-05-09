const http = require("http")
const { createReadStream, readFileSync } = require("fs")

http
  .createServer((req, res) => {
    // const text = readFileSync('./big.txt', "utf8")
    // res.end(text)

    const fileStream = createReadStream('./big.txt', 'utf8')
    fileStream.on("open", () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)



