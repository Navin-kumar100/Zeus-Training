import express from 'express';
import MeinRouter from '../routes/index'

const app = express();
const port = 3000;

app.use(express.json())

// app.get("/api", (req :any, res :any) => {
//   res.send('Hello World!');
// });

app.use(MeinRouter);


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
