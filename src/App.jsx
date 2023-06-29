import { useState } from 'react';
import ProductDecription from './pages/ProductDescription';
import contextData from './contextApi/productData'
import context from './contextApi/productsInfo'



function App() {
	const [selectedParts, setSelectedParts] = useState([]);
	const [assembledParts, setAssembledParts] = useState([]);
	


	return (
		<>
			<contextData.Provider value={{ selectedParts, setSelectedParts }}>
				<context.Provider value={{ assembledParts, setAssembledParts }}>
						<ProductDecription />
				</context.Provider>
			</contextData.Provider>
		</>
	)
}

export default App
