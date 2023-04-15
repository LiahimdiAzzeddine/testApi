const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Serve the glb file and its animation from a static directory
app.use('/assets', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  // Replace this with your desired response
  res.send('Hello from the /nft/woman route!');
});

// Endpoint for generating the link to the iframe
app.get('/nft/:id', (req, res) => {
    console.log('__dirname:', __dirname);
console.log('Contents of public folder:', fs.readdirSync(path.join(__dirname, 'public')));

  const id = req.params.id;
  const iframeSrc = `/assets/nft.html?id=${id}`;
  res.send(`<iframe style="width: 100%; height: 100%;" src="${iframeSrc}"></iframe>`);
});

app.listen(3000, () => console.log('Server running on port 3000'));
