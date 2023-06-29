
import { useState } from "react";

function PartsAssembly({sam}) {
	const [assembledParts, setAssembledParts] = useState([]);

	const handlePartAssembly = (part) => {
		if (!assembledParts.includes(part)) {
			setAssembledParts([...assembledParts, part]);
		}
	};
	console.log("sam", sam);

	return (
		<>
			<div>
				<h1>Parts Assembly</h1>
				<div style={{ display: 'flex' }}>
					<div style={{ overflowY: 'scroll' }}>
						{selectedParts.map((part) => (
							<div key={part.id} draggable onDragStart={() => handlePartAssembly(part)}>
								<img src={part.image} alt={part.name} />
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
								<div key={part.id}><img src={part.image} alt={part.name} /></div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PartsAssembly
