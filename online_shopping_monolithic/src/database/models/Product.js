import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ProductSchema = new Schema({
    name: String,
    desc: String,
    banner: String,
    type: String,
    unit: Number,
    price: Number,
    available: Boolean,
    suplier: String
});

export default model('product', ProductSchema);