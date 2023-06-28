import React from 'react'
import { useContext } from 'react';
import contextData from '../contextApi/productData';


function ProductDecription() {
	const { setSelectedParts} = useContext(contextData);
	return (
		<>
			<div>
				<h1>Product Description</h1>
				<img src="https://images.pexels.com/photos/8294568/pexels-photo-8294568.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product" />
				<button onClick={() => setSelectedParts([])}>START</button>
			</div>
		</>
	)
}

export default ProductDecription;
