import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function FinalProductview() {
	const navigate = useNavigate();
	const [assembledParts] = useState(() => {
		const response = sessionStorage.getItem("assembledParts");
		if (response) {
			return JSON.parse(response)
		}
		else {
			return []
		}
	})

	return (
		<>
			<div style={{ display: "flex", flexDirection: "column", textAlign: "center", margin: "1px 500px" }}>
				<h1>Final Product View</h1>
				<div>
					{
						assembledParts.map((part) =>
							<img key={part.id} src={part.image} />
						)
					}
				</div>
				<div style={{alignItems:"center", marginTop:"15px"}}>
					<button style={{ border: "1px solid yellow", width: "60%" }} onClick={() => navigate('/')}>Go to Home</button>
				</div>
			</div>
		</>

	)
}

export default FinalProductview;
