import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// app.get("/qqq", (req, res)=> {              //req- request , res- response
//     res.json({messgae: "Helo world"});
// })

app.post("/orders", (req, res) => {
    const order = req.body; // Get the data sent from frontend
    console.log("Wt ever is sent by frontend is here re babba, but in console of vs code backend terminal", order);
     
    res.status(201).send({ message: "This to to conform that the data sent by fronted is received, but in Postman response section", order });
  });

app.listen(5000, () => {
    console.log("Server has started on port 5000");
})

