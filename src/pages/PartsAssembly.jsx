import React from 'react'
import contextData from './contextApi/productData.js'
import context from './contextApi/productsInfo.js'
import { useContext } from 'react';

function PartsAssembly() {
	const { selectedParts } = useContext(contextData);
	const { assembledParts, setAssembledParts } = useContext(context);


	const handlePartAssembly = (part) => {
		if (!assembledParts.includes(part)) {
			setAssembledParts([...assembledParts, part]);
		}
	};

	return (
		<>
			<div>
				<h1>Parts Assembly</h1>
				<div style={{ display: 'flex' }}>
					<div style={{ overflowY: 'scroll' }}>
						{selectedParts.map((part) => (
							<div key={part.id} draggable onDragStart={() => handlePartAssembly(part)}>
								<img src={part.image} alt={part.name} />
								<p>{part.name}</p>
							</div>
						))}
					</div>
					<div
						style={{
							border: '1px solid black',
							width: '300px',
							height: '300px',
							margin: '0 10px',
						}}
						onDragOver={(e) => e.preventDefault()}
						onDrop={(e) => {
							e.preventDefault();
							const part = JSON.parse(e.dataTransfer.getData('part'));
							handlePartAssembly(part);
						}}
					>
						<div style={{ display: "flex" }}>
							{assembledParts.map((part) =>
								<div><img src={part.image} alt="dragedimage" /></div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PartsAssembly
