const { log } = require('console')
const fs = require('fs')
const util = require('util')

const readFilePromise = util.promisify(fs.readFile)
const writeFilePromise = util.promisify(fs.writeFile)


const start = async () => {
  const first = await readFilePromise('./first.txt', "utf-8");
  const second = await readFilePromise('./second.txt', "utf-8");
  console.log(first, second);
}
start()

console.log("third");


// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }