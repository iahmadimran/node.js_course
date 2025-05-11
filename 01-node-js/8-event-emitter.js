const EventEmitter = require('events')

const data = new EventEmitter()

data.on("response", (res, name) => {
  console.log(`data recieved of ${res} bytes from the guy named ${name}.`);
})

data.on("response", () => {
  console.log(`Some another response from a guy.`);
})

data.emit('response', 30, "Ahmad")