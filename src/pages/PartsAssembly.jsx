
import { useState } from "react";

function PartsAssembly() {
	const [assembledParts, setAssembledParts] = useState([]);
	const [selectedParts, setSelectedParts] = useState(() => {
		const response = sessionStorage.getItem("selectedParts");
		if (response) {
			return JSON.parse(response)
		}
		else {
			return [];
		}
	})





	const handlePartAssembly = (part) => {
		if (!assembledParts.includes(part)) {
			setAssembledParts([...assembledParts, part]);
		}
	};
	console.log("result", selectedParts);

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
							width: '1000px',
							height: '500px',
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
