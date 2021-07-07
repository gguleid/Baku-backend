require('dotenv').config();
const { PORT = 5000, MONGODB_URL } = process.env;
const mongoose = require("mongoose");
const cors = require('cors');
const express = require('express');
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
// MODEL
///////////////////////////////
const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true,
    },
    image: String,
    price: Number,
    description: String

 },
{
    timestamps: true,
}
    );

const Products = mongoose.model('Products', ProductsSchema);
///////////////////////////////
// MIDDLEWARE
///////////////////////////////
app.use(cors());
app.use(express.json());


///////////////////////////////
// ROUTES
///////////////////////////////
app.get('/', (req, res) => {
    res.send('Baku cold brew');
})

app.get('/products', async (req, res) => {
    try {
        res.json(await Products.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

app.delete('/products/:id', async (req, res) => {
    try {
        res.json(await Products.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error);
    }
});

app.post('/products', async (req, res) => {
    try {
        res.json(await Products.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
})



///////////////////////////////
// LISTENER
///////////////////////////////
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });
