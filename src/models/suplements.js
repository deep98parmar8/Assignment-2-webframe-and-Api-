import mongoose from 'mongoose';
//import ran from 'mongoose-random';


const productSchema = new mongoose.Schema({
    id: {
    type: String, 
    required: true,
    unique: true
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    suplements: {
        type: String,
        required: true,
    },
    
}, {
    timestamps: true,
    collection: 'Suplements'

});

productSchema.statics.findByid = async function (id){
    return await this.find({ id });

};




const Suplements = mongoose.model('Suplements', productSchema);

export default Suplements;