import express, {Request, Response} from 'express';

const app = express();
const port = 8080;

// define a route handler for the default home page
app.get('/', (req: Request, res: Response) => {
  res.send("Hello world!");
  console.log('hello-world');
});

app.get('/data', (req: Request, res: Response) => {
  res.send(JSON.stringify({'var1': 'val1', 'var2': 'val2'}));
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
