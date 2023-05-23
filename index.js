const express = require('express');

const app = express();

app.get('*', (req, res) => {
  res.status(200).json({
    status: 'ok',
    path: req.path,
  });
});

app.listen(8080, () => {
  console.log('Started on port 8080');
});
