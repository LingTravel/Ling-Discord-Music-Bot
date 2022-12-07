const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Bot running on http://localhost:${port}`));
app.get('/', (req, res) => {
  res.send('Hello World!'); // or do whatever you want with req or res
})