import 'dotenv/config';
import express from 'express';
import cors from 'cors'; 

import models, { connectDB } from './models';
import Suplements from './models/suplements';
import path from 'path';
const app = express();
app.use(cors());
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.get('/index', async(req,res) => {
    const products = await Suplements.find({});
    return res.send(products)
});
connectDB().then(() =>{

    //createProduct(); Do not need this now cause it worked 
    app.listen(3000, () => {
        //if works then console.log
        console.log("MongoDB is connected");
    });
}).catch(err => {
    console.error(err.message);
});

const createProduct = async () => {
    const product1 = new models.Suplements({
      id: 'testasin44',
      name: 'Db Test',
      price: 43,
      rating: 4.4,
     link: 'somelink.test',
     suplements: 'API',
      
    });
    await product1.save();
};
