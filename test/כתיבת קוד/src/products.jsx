import React, { useState } from "react";
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {  Link } from "react-router-dom";

interface product {
    id: string,
    name: string,
    price: number,
}

function Products() {
    const { productID } = useParams()

    const [productId, setProductId] = useState  (productID);

    const [productData, setProductData] = useState < product > ({});
    const dataProduct = axios.get(`http://localhost:3000/product/id=${productId}`)
        .then(res => {
            setProductData(res.data)
        })
    const updateProduct = (event) => {
        const update = ({ id: productId, name: event.target.name.value, price: event.target.price.value })
        const response = axios.put(`http://localhost:3000/product/id=${productId}`, update)
            .then(res => {
               return( <Link to="/masterProduct">admin</Link>)
            })
    }
    return (<div>
        <form onSubmit={updateProduct}>
            <input id="outlined-basic" label="שם מוצר" name="name" variant="outlined" value={productData.name} required />
            <input id="outlined-basic" label="מחיר" name="price" variant="outlined" value={productData.price}   required />
            <button variant="outlined" color="secondary" type="submit">לסיום עדכון</button>
        </form>
    </div>)
}

export default Products;