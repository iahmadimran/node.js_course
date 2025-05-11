const os = require("os")

const windowsVersion = os.version();
const userInfo = os.userInfo();
const uptime = os.uptime();

const type = os.type();

console.log(os.networkInterfaces())

// console.log(windowsVersion);
// console.log(userInfo);
// console.log(uptime);

console.log(type);

