import { connectionMongo } from "@/app/libery/db";
import { product } from "@/app/libery/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionMongo);
    const data = await product.find()
    console.log(data)
    return NextResponse.json({result: true});
}