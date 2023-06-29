import { useState } from 'react';
import parts from '../Data'
import { useNavigate } from 'react-router-dom';


function ProductDetails() {
	const navigate = useNavigate();
	const [selectedParts, setSelectedParts] = useState([]);
	// const { myFunck } = props;

	const handlePartSelection = (part) => {
		setSelectedParts([...selectedParts, part]);

	};

	console.log("selectedParts", selectedParts)

	function updateData() {
        sessionStorage.setItem("selectedParts", JSON.stringify(selectedParts))
		navigate('/partsAssembly')
	}

	return (
		<>
			<div style={{ margin: "150px 300px", width: "800px", textAlign: "center" }}>
				<h1>Parts Selection</h1>
				<div style={{ overflowX: 'scroll', display: "flex" }}>
					{parts.map((part) => (
						<div key={part.id} style={{ textAlign: "center", border: "2px solid black" }}>
							<img src={part.image} alt={part.name} width="190px" />
							<p>{part.name}</p>
							<input
								type="checkbox"
								onChange={() => handlePartSelection(part)}
							/>
						</div>
					))}

				</div>
				<div style={{ marginTop: "30px" }}>
					<button style={{ border: "1px solid yellow", marginRight: "5px" }} onClick={() => navigate('/')}>Back</button>

					<button style={{ border: "1px solid yellow" }} onClick={() => updateData()}>Next</button>

				</div>

			</div>
		</>
	)
}

export default ProductDetails
