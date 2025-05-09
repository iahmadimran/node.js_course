const { writeFileSync } = require("fs")
for (let i = 0; i <= 1000; i++) {
  writeFileSync('./big.txt', `Trying write file from the node js built in module  named fs ${i}\n`, { flag: 'a' })
}