const { log } = require('console')
const { readFile } = require('fs')
const util = require('util')

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

const start = async () => {
  const first = await getText('./first.txt');
  const second = await getText('./second.txt');
  console.log(first, second);
}
start()

console.log("heyy");
