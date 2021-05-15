import axios from 'axios';
import React, { useState } from 'react';

const Admin = () => {

    const [food, setFood] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0)
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState(0)

    const handleSubmit = () => {
        let payload = {
            "name": food,
            "img_url": imgUrl,
            "category": category,
            "price": price,
            "rating": rating,
            "reviews": review
        }

        axios.post(process.env.REACT_APP_DATABASE_URL, payload)
        .then((res) => {
            console.log(res);
        }).catch = (err) => {
            console.log(err);
        }
        console.log(payload);
    }
    return (
        <div>
            <input value={food} onChange={(e) => setFood(e.target.value)} placeholder="Food Item"/><br/><br/>
            <input value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} placeholder="Image Url"/><br/><br/>
            <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category"/><br/><br/>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price"/><br/><br/>
            <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating"/><br/><br/>
            <input type="number" value={review} onChange={(e) => setReview(e.target.value)} placeholder="Reviews"/><br/><br/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export { Admin }