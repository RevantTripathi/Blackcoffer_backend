const express= require('express')
const connectDB = require('./config/dbConfig')
require("dotenv").config();
const cors = require('cors');
const app = express()


connectDB();

app.use(cors);
app.use(express.json());

// app.use("/data", require("./routes/dataRoutes"));

app.use("/data", (req, res, next) => {
    console.log("Custom route logging middleware");
    next();
}, require("./routes/dataRoutes"));

console.log("Routes setup completed");


app.listen(5000,()=>{
    console.log("Server started on port 5000")
})