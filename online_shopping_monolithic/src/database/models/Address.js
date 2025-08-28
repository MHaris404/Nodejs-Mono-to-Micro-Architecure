import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const AddressSchema = new Schema({
    street: String,
    postalCode: String,
    city: String,
    country: String
});

export default model('address', AddressSchema);