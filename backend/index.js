import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post("/test", (req, res)=> {              //req- request , res- response
    res.send("Post request received");
})

app.listen(5000, () => {
    console.log("Server has started on port 5000");
})

