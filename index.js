import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatRoutes from './routes/chatRoutes.js'; 


dotenv.config(); 

const app = express();
const PORT = process.env.PORT;


const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'POST',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', chatRoutes);


app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
