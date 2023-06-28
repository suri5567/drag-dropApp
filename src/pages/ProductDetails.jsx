import React from 'react'
import { useContext } from 'react';
import contextData from '../contextApi/productData';
import contextParts from '../contextApi/partsContext';

function ProductDetails() {
	const {selectedParts, setSelectedParts} = useContext(contextData);
	const {parts} = useContext(contextParts);

	const handlePartSelection = (part) => {
		if (selectedParts.includes(part)) {
			setSelectedParts(selectedParts.filter((selectedPart) => selectedPart !== part));
		} else {
			setSelectedParts([...selectedParts, part]);
		}
	};
  return (
	<>
	   <div>
              <h1>Parts Selection</h1>
              <div style={{ overflowX: 'scroll' }}>
                {parts.map((part) => (
                  <div key={part.id}>
                    <img src={part.image} alt={part.name} />
                    <p>{part.name}</p>
                    <input
                      type="checkbox"
                      checked={selectedParts.includes(part)}
                      onChange={() => handlePartSelection(part)}
                    />
                  </div>
                ))}
              </div>
            </div>
	</>
  )
}

export default ProductDetails
