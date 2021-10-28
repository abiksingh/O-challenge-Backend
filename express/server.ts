import express from 'express';
import connectDB from './config/db';
import userRoutes from '../express/routes/userRoutes';

connectDB();

const app = express();

app.use(express.json());

app.use('/api', userRoutes);

const PORT = 3000;

// start the Express server
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
