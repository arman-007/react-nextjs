import cors from "cors"
import helmet from "helmet"
import express, {Request, Response} from 'express';
import hotelRoutes from './routes/hotelRoutes';

export const app = express();
const PORT = 5000; 

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(helmet())
app.use(cors({
  origin: 'http://localhost:3000',  // Allow requests from this frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

app.use('/', hotelRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!')
})

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

export default app;
