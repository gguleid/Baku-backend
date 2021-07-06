require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PORT = 5000, MONGODB_URL } = process.env;
const mongoose = require("mongoose");
const fileUpload = require('express-fileupload');
const cookieParaser = require('cookie-parser');
const app = express();

///////////////////////////////
// DATABASE CONNECTION
///////////////////////////////
mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

mongoose.connection
.on("open", () => console.log("You're connected to mongoose"))
.on("closed", () => console.log("You're disconnected to mongoose"))
.on("error", (error) => console.log(error));


///////////////////////////////
// MIDDLEWARE
///////////////////////////////
app.use(cors());
app.use(express.json());
app.use(cookieParaser());
app.use(fileUpload({
    useTempFiles: true
}));

///////////////////////////////
// ROUTES
///////////////////////////////
const userCtrlRouter = require('./controllers/userCtrl');
app.use('/user', customersRouter);

const productsRouter= require('./controllers/products');
app.use('/products', productsRouter);



app.get('/', (req, res) => {
    res.send('Baku cold brew');
})






///////////////////////////////
// LISTENER
///////////////////////////////
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });
