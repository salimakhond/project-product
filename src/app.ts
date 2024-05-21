import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRouters } from './productModules/product.route';
import { OrderRouters } from './orderModules/order.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

// application route
app.use('/api', ProductRouters);
app.use('/api', OrderRouters);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
