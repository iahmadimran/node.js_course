const loggers = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();

  console.log(method, url, status);
  next()
}

module.exports = loggers;