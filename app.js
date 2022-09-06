import express from 'express';


const app = express();
const PORT = process.env.PORT || 5_000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'hello world',
    data: 'Youtube Clone API'
  });
});

app.listen(PORT, () => {
  console.log(`[Server ⚡] running on port ${PORT}.`);
});
