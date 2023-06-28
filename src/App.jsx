import React, { useState } from 'react';
import ProductDecription from './pages/ProductDecription';
import ProductDetails from './pages/ProductDetails';
import PartsAssembly from './pages/PartsAssembly';
import FinalProductview from './pages/FinalProductview';
import contextData from './contextApi/productData.js'
import context from './contextApi/productsInfo.js'
import contextParts from './contextApi/partsContext';

function App() {
	const [selectedParts, setSelectedParts] = useState([]);
	const [assembledParts, setAssembledParts] = useState([]);
	const [parts] = useState(contextParts);

	return (
		<>
			<contextData.Provider value={{ selectedParts, setSelectedParts }}>
				<context.Provider value={{ assembledParts, setAssembledParts }}>
					<contextParts.Provider value={{parts}}>
						{
							selectedParts.length === 0 ? (
								<ProductDecription />
							) : assembledParts.length === 0 ? (
								<ProductDetails />

							) : assembledParts.length < selectedParts.length ? (
								<PartsAssembly />
							) : (
								<FinalProductview />
							)
						}
					</contextParts.Provider>
				</context.Provider>
			</contextData.Provider>
		</>
	)
}

export default App
