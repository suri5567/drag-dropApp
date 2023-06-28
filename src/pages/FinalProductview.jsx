import React from 'react'
import context from './contextApi/productsInfo'
import { useContext } from 'react';

function FinalProductview() {
	const { assembledParts } = useContext(context);
	return (
	
			<div>
				<h1>Final Product View</h1>
				{assembledParts.map((part) =>
					<div style={{ display: "flex" }}>
						{assembledParts.map((part) =>
							<div><img src={part.image} alt="dragedimage" /></div>
						)}
					</div>

				)}
			</div>
		
	)
}

export default FinalProductview
