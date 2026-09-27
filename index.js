const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/*', async (req, res) => {
  const url = req.query.url || req.url.slice(1);
  try {
    const response = await fetch(decodeURIComponent(url), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const data = await response.text();
    res.header('Access-Control-Allow-Origin', '*');
    res.send(data);
  } catch (e) {
    res.status(500).send('Error');
  }
});

app.listen(process.env.PORT || 3000);
