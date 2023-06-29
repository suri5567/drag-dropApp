
import { useNavigate } from 'react-router-dom';


function ProductDecription() {
	const navigate = useNavigate();
	return (
		<>
			<div style={{ margin: "100px 600px", textAlign:"center" }}>
				<h2 style={{fontSize:"20px"}}>Product Description</h2>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<img src="https://img.freepik.com/free-photo/robot-character-with-smart-phone_1048-3573.jpg?size=626&ext=jpg&uid=R88439026&semt=ais" width={"350px"} />
					<button onClick={() => navigate('/productDetails')}>START</button>
				</div>
			</div>
		</>
	)
}

export default ProductDecription;
