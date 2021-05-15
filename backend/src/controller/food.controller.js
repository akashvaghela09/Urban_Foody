const express = require("express")
const router = express.Router()
const {FoodUpload} = require("../model/food.modal")

router.get("/", async (req, res) => {
    const foodItem = await FoodUpload.find().lean().exec();
    return res.status(200).json({data: foodItem})
})

router.post("/", async (req, res) => {
    try {
        const foodItem = await FoodUpload.create(req.body);
        return res.status(201).json({data: foodItem})
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
})

router.get("/:id", async (req, res) => {
    try {
        const foodItem = await FoodUpload.findById(req.params.id).lean().exec()
        return res.status(200).json({data: foodItem})
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const foodItem = await FoodUpload.findByIdAndUpdate(req.params.id, req.body, { new: true}).lean().exec()
        return res.status(200).json({data: foodItem})
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const foodItem = await FoodUpload.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).json({data: foodItem})
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
})

module.exports = router