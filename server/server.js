import express from 'express'
import dotenv from 'dotenv'
import ConnectToMongo from "./config/db.js" 
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"
const app = express();

dotenv.config();

const PORT = process.env.PORT;
const corsOptions = {
    origin: "https://yourfrontenddomain.com", // Replace with your actual frontend domain
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  };

app.use(express.json());
app.use(cors(corsOptions))
ConnectToMongo();



app.use('/api/user/',  userRoutes)
app.use('/',(req,res) =>{
    res.send("Wellcome dear")
})
app.use('/rahad', (req,res) => {
    res.send("fock you its working");
})

app.listen(PORT, () =>{
    console.log(`App is running on http://localhost:${PORT}`);
})