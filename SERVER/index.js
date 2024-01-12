
const express = require('express');
const app = express();

const cors = require('cors');
const  todoRoute = require('./routes/todos');


require('dotenv').config();
app.use(cors());
const PORT = process.env.PORT || 6000;
app.use(express.json());

// const todoRoute = require('./routes/todos');
app.use("/api/v1/todo", todoRoute);

app.listen(PORT, ()=> {
    console.log("Server started succefully on port", PORT);
});
const dbConnect = require('./config/databse');
dbConnect();

app.get('/', (request, response) => {
    response.send('<h1>This is the Todo app</h1>');
})