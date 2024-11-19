import cors from "cors";
import helmet from "helmet";
import express, {Request, Response} from 'express';
import hotelRoutes from './routes/hotelRoutes';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(helmet())
app.use(cors({
  origin: 'http://localhost:3000',  // Allow requests from this frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));
app.use('/uploads', express.static('uploads'));

app.use('/', hotelRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!')
})

export default app;
