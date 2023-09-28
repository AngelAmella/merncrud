require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const employeeRoutes = require('./router/employee');

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

//route

app.use('/api/employee', employeeRoutes)

//MONGOOSE 
const conn_str = 'mongodb+srv://antocoquiaup:r157W1ostVBO8ja0@cluster22.kcvdibi.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(conn_str, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(() => {
    console.log('Connected to MongoDB Atlas');
  })
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


 //LISTEN FOR REQUEST
app.listen(process.env.PORT, () => {
    console.log('Listening in port', process.env.PORT)
  })

