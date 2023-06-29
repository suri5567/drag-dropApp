
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function PartsAssembly() {
	const navigate = useNavigate();
	const [assembledParts, setAssembledParts] = useState([]);
	const [selectedParts] = useState(() => {
		const response = sessionStorage.getItem("selectedParts");
		if (response) {
			return JSON.parse(response)
		}
		else {
			return []
		}
	})

	const updateData = () => {

		if (assembledParts.length > 0) {
			sessionStorage.setItem("assembledParts", JSON.stringify(assembledParts))
			navigate('/finalProductview')
		}
		else {
			alert("please drag the images in to box first !!!")
		}
	}


	const handlePartAssembly = (part) => {
		if (!assembledParts.includes(part)) {
			setAssembledParts([...assembledParts, part]);
		}
	};
	// console.log("result", assembledParts);

	return (
		<>
			<div style={{textAlign:"center"}}>
				<h1>Parts Assembly</h1>
				<div style={{ display: 'flex' }}>
					<div style={{ overflowY: 'scroll' }}>
						{selectedParts.map((part) => (
							<div style={{ width: "200px" }} key={part.id} draggable onDragStart={() => handlePartAssembly(part)}>
								<img src={part.image} alt={part.name} style={{ width: "150px" }} />
							</div>
						))}
					</div>
					<div
						style={{
							border: '1px solid white',
							width: '1000px',
							height: '500px',
							margin: '20px 30px',
						}}
						onDragOver={(e) => e.preventDefault()}
						onDrop={(e) => {
							e.preventDefault();
							const part = JSON.parse(e.dataTransfer.getData('part'));
							handlePartAssembly(part);
						}}
					>
						<div style={{ display: "flex", width: "50px" }}>
							{assembledParts.map((part) =>
								<div key={part.id}><img src={part.image} alt={part.name} style={{ width: "150px" }} /></div>
							)}
						</div>
					</div>
				</div>
			</div>
			<div style={{ margin: "0px 50%", display: "flex", alignItems: "center" }}>
				<button style={{ border: "1px solid yellow", marginRight: "5px" }} onClick={() => navigate('/productDetails')}>Back</button>

				<button style={{ border: "1px solid yellow" }} onClick={() => updateData()}>Next</button>

			</div>
		</>
	)
}

export default PartsAssembly
