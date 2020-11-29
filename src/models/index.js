import mongoose from 'mongoose';

import Suplements from './suplements';


const connectDB = () => {
return mongoose.connect(process.env.DATABASE_URL, {
    autoIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
}

const models = {Suplements};

export { connectDB };
export default models;