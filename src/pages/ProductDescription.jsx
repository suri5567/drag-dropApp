
import { useNavigate } from 'react-router-dom';


function ProductDescription() {
	const navigate = useNavigate();
	return (
		<>
			<div style={{ margin: "0px 500px", textAlign:"center" }}>
				<h2 style={{fontSize:"20px"}}>Product Description</h2>
				<div style={{ display: "flex", flexDirection: "column", }}>
					<img src="https://img.freepik.com/free-photo/robot-character-with-smart-phone_1048-3573.jpg?size=626&ext=jpg&uid=R88439026&semt=ais" width={"450px"} style={{borderRadius:"5px"}} />
					<button onClick={() => navigate('/productDetails')}>START</button>
				</div>
			</div>
		</>
	)
}

export default ProductDescription;
