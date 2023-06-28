import React from 'react'
import context from './contextApi/productsInfo.js'
import { useContext } from 'react';

function FinalProductview() {
	const {assembledParts} = useContext(context);
	return (
		<>
			<div>
				<h1>Final Product View</h1>
				{assembledParts.map((part) =>
				  
				  
				 )}
			</div>
		</>
	)
}

export default FinalProductview
