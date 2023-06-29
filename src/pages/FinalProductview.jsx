import { useState } from "react";

function FinalProductview() {
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
			<h1>Final Product View</h1>
			<div>
				{
					assembledParts.map((part) =>
						<img key={part.id} src={part.image} />
					)
				}
			</div>
		</>

	)
}

export default FinalProductview
