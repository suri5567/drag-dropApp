

function FinalProductview() {
	
	return (
	
			<div>
				<h1>Final Product View</h1>
				{assembledParts.map((part) =>
					<div key={part.id} style={{ display: "flex" }}>
						{assembledParts.map((part) =>
							<div key={part.id}><img src={part.image} alt={part.name} /></div>
						)}
					</div>

				)}
			</div>
		
	)
}

export default FinalProductview
