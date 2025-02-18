import express from 'express'
import dotenv from 'dotenv'
import ConnectToMongo from "./config/db.js" 
import userRoutes from "./routes/userRoutes.js"
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

ConnectToMongo();



app.use('/api/user/',  userRoutes)
app.use('/',(req,res) =>{
    res.send("Wellcome dear")
})


app.listen(PORT, () =>{
    console.log(`App is running on http://localhost:${PORT}`);
})