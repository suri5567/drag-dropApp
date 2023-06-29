import { useState } from 'react';
import ProductDescription from './pages/ProductDescription';
import ProductDetails from './pages/ProductDetails';
import ProductAssembly from './pages/PartsAssembly';
import FinalProductview from './pages/FinalProductview';


function App() {
	const [selectedParts, setSelectedParts] = useState([]);

	const Takedata =(data)=>{
		setSelectedParts(data);
	}
	return (
		<>
			
					<ProductDescription />
					<ProductDetails myFunck={Takedata}/>
					<ProductAssembly sam={selectedParts} />
					<FinalProductview />
		
		</>
	)
}

export default App
