import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    name: String,
    price: String,
    company: String,
    catagory: String,
    colors: String
})

export const product = mongoose.models.products || mongoose.model("products", productModel)