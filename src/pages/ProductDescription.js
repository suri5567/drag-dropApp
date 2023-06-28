import React from 'react'
import { useContext } from 'react';
import contextData from '../contextApi/productData';


function ProductDecription() {
	const { setSelectedParts} = useContext(contextData);
	return (
		<>
			<div>
				<h1>Product Description</h1>
				<img src="product_image.jpg" alt="Product" />
				<button onClick={() => setSelectedParts([])}>START</button>
			</div>
		</>
	)
}

export default ProductDecription;
