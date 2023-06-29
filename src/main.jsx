import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails.jsx';
import PartsAssembly from './pages/PartsAssembly.jsx';
import ProductDecription from './pages/ProductDescription';
import FinalProductview from './pages/FinalProductview';

const router = createBrowserRouter([{
	path: '/',
	element: <ProductDecription />
}, {
	path: '/productDetails',
	element: <ProductDetails />
}, {
	path: '/partsAssembly',
	element: <PartsAssembly />
},
{
	path: '/finalProductview',
	element: <FinalProductview />
}])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</React.StrictMode>,
)
