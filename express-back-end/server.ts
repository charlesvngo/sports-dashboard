import express from 'express';
import axios from 'axios';

const app = express();
const port = 8080;

app.get('/api/data', (req, res) => {
  const data = { info: "This is the response of the API Call"}
  res.json(data)
})

app.listen(port, () => {
  console.log(`👍 Server is listening on port ${port}`);
})