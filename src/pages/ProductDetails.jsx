
import { useContext } from 'react';
import contextData from '../contextApi/productData';
import parts from '../Data'

function ProductDetails() {
	const { selectedParts, setSelectedParts } = useContext(contextData);


	const handlePartSelection = (part) => {
		if (selectedParts.includes(part)) {
			setSelectedParts(selectedParts.filter((selectedPart) => selectedPart !== part));
		} else {
			setSelectedParts([...selectedParts, part]);
		}
	};

	console.log("parts", parts);
	return (
		<>
			<div style={{ margin: "50px 100px" }}>
				<h1>Parts Selection</h1>
				<div style={{ overflowX: 'scroll', display: "flex" }}>
					{parts.map((part) => (
						<div key={part.id} style={{ textAlign: "center", border: "2px solid black"}}>
							<img src={part.image} alt={part.name} />
							<p>{part.name}</p>
							<input
								type="checkbox"
								onChange={() => handlePartSelection(part)}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default ProductDetails
