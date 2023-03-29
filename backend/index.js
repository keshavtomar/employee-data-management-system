const express = require('express')
const app = express()
const port = 4000
const mongoDB = require("./db");
mongoDB();


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3006");
    res.header(
        "Access-Control-Allow-Headers",
        "Origiin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json());

app.use('/api', require('./Routes/createUser'));
app.use('/api', require('./Routes/addEmployee'));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})