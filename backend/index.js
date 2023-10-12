const express = require ("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const booksRoute = require("./routes/booksRoute")
const cors = require("cors")
// import booksRoute from './routes/booksRoute.js';
// import cors from 'cors';


app.use(express.json())

// Middleware for parsing request body
// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

//routes
app.get('/', (req, res) =>{

  res.send('Hello ')
})
app.use('/books', booksRoute);


dotenv.config();

mongoose.connect


mongoose.connect("mongodb+srv://admin:root@cluster0.zhvxoe8.mongodb.net/Library?retryWrites=true&w=majority")
.then(()=>{
  app.listen(4000, ()=>{

    console.log("Server Running ");
});
  console.log("Connected to mongoDB")
}).catch((error)=>{
  console.log(error)
})