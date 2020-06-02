import express from 'express';

const app = express();

// app.use(express.json());

app.get('/users', (req, res) => {
  res.json([
    "Erick",
    "Emily",
  ]);
});

app.listen(3333);
