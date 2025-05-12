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
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});