import express from 'express'
import dotenv from 'dotenv'
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());


app.use('/',(req,res) =>{
    res.send("Wellcome dear")
})


app.listen(PORT, () =>{
    console.log(`App is running on http://localhost:${PORT}`);
})