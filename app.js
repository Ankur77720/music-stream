require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');



app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());



app.use('/user', userRoutes);


app.listen(3000, () => {
    console.log(`Server is running http://localhost:3000`);
});