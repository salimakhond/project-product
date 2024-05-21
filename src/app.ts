import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRouters } from './modules/product.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

// application route
app.use('/api', ProductRouters);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
