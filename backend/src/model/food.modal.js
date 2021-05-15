const mongoose = require("mongoose");

const foodUploadSchema = new mongoose.Schema(
    {
        name: {type:String, required: true},
        img_url: {type:String, required: true},
        category: {type:String, required: true},
        price: {type:Number, required: true},
        rating: {type:Number, required: true},
        reviews: {type:Number, required: true}
    }, 
    { versionKey: false }
)

const FoodUpload = mongoose.model("food", foodUploadSchema);

module.exports = {FoodUpload}