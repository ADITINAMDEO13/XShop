import React from 'react'
import {useSelector} from 'react-redux';

function ProductDetail() {
    const pp = useSelector((state) => state)
    console.log("ProductDetail",pp);
    return (
        <div>
            Product Detail
        </div>
    )
}

export default ProductDetail
