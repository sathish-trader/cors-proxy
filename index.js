const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/*', async (req, res) => {
  const url = req.url.slice(1);
  try {
    const response = await fetch(decodeURIComponent(url));
    const data = await response.text();
    res.header('Access-Control-Allow-Origin', '*');
    res.send(data);
  } catch (e) {
    res.status(500).send('Error');
  }
});

app.listen(process.env.PORT || 3000);
