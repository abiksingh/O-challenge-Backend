import express from 'express';
import connectDB from './config/db';
import studentRoutes from './routes/studentRoutes';

connectDB();

const app = express();

app.use(express.json());

app.use('/api', studentRoutes);

const PORT = 5000;

// start the Express server
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
