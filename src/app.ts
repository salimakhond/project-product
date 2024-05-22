import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import { ProductRouters } from './productModules/product.route';
import { OrderRouters } from './orderModules/order.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

// application route
app.use('/api', ProductRouters);
app.use('/api', OrderRouters);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
