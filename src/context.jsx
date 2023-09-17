import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

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

	value.closeAlert = () => {
		dispatch({ type: 'CLOSE_ALERT' });
	};
	value.removeOrder = itemId => {
		dispatch({ type: 'REMOVE_ORDER', payload: { id: itemId } });
	};

	return (
		<ShopContext.Provider value={value}>{children}</ShopContext.Provider>
	);
};
