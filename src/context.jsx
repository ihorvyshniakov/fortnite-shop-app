import { createContext, useReducer } from 'react';
import { reducer } from './reducer.js';

export const ShopContext = createContext();

const initialState = {
	goods: [],
	loading: true,
	orders: [],
	isBasketShow: false,
	alertName: ''
};

export const ContextProvider = ({ children }) => {
	const [value, dispatch] = useReducer(reducer, initialState);

	value.setGoods = data => {
		dispatch({ type: 'SET_GOODS', payload: data });
	};
	value.addOrder = newItem => {
		dispatch({ type: 'ADD_ORDER', payload: newItem });
	};
	value.removeOrder = itemId => {
		dispatch({ type: 'REMOVE_ORDER', payload: { id: itemId } });
	};
	value.decrementQuantity = itemId => {
		dispatch({ type: 'DECREMENT_QTY', payload: { id: itemId } });
	};
	value.incrementQuantity = itemId => {
		dispatch({ type: 'INCREMENT_QTY', payload: { id: itemId } });
	};
	value.handleBasketShow = () => {
		dispatch({ type: 'TOGGLE_BASKET' });
	};
	value.closeAlert = () => {
		dispatch({ type: 'CLOSE_ALERT' });
	};

	return (
		<ShopContext.Provider value={value}>{children}</ShopContext.Provider>
	);
};
