const { products } = require('./data.js');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(
    "<h1>Home page</h1><a href='/api/products'>Products</a>"
  )
});

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;

    return { id, name, image };
  })

  res.json(newProducts)
})

app.get('/api/products/:productId', (req, res) => {
  const { productId } = req.params;
  const singleProduct = products.find((product) => product.id === Number(productId))

  if (!singleProduct) {
    return res.send('Sorry the requested address is not available.')
  }

  return res.json(singleProduct)
});

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
  const { reviewId } = req.params;
  res.send("hello world.")
})

app.get('/api/query', (req, res) => {
  const { search, limit } = req.query;

  let searchedProducts = [...products]

  if (search) {
    searchedProducts = searchedProducts.filter((product) => (
      product.name.startsWith(search)
    ))
  }

  if (limit) {
    searchedProducts = searchedProducts.splice(0, Number(limit))
  }

  if (searchedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] })
  }

  return res.status(200).json(searchedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});