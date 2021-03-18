import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = (item) => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	const removeItem = (itemId) => {
		const newCartArray = cart.filter((cartItem) => cartItem.id !== itemId);
		setCart(newCartArray);
	};

	return (
		<CartContext.Provider value={{ cart, removeItem }}>
			<div className='App'>
				<Navigation />

				{/* Routes */}
				<ProductContext.Provider value={{ products, addItem }}>
					<Route exact path='/'>
						<Products /*products={products} addItem={addItem}*/ />
					</Route>
				</ProductContext.Provider>

				<Route path='/cart'>
					<ShoppingCart />
				</Route>
			</div>
		</CartContext.Provider>
	);
}

export default App;
