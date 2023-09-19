export function reducer(state, { type, payload }) {
	switch (type) {
		case 'SET_GOODS':
			return {
				...state,
				goods: payload,
				loading: false
			};
		case 'ADD_ORDER': {
			const isItemAlreadyBought = state.orders.some(
				oldItem => oldItem.id === payload.id
			);

			let newOrders = null;
			if (!isItemAlreadyBought) {
				newOrders = [
					...state.orders,
					{
						...payload,
						quantity: 1
					}
				];
			} else {
				newOrders = state.orders.map(i => {
					if (i.id !== payload.id) {
						return i;
					}
					return {
						...i,
						quantity: i.quantity + 1
					};
				});
			}

			return {
				...state,
				orders: newOrders,
				alertName: payload.name
			};
		}
		case 'REMOVE_ORDER':
			return {
				...state,
				orders: state.orders.filter(el => el.id !== payload.id)
			};
		case 'DECREMENT_QTY': {
			const existedItem = state.orders.find(el => el.id === payload.id);

			return {
				...state,
				orders:
					existedItem.quantity === 1
						? state.orders.filter(el => el.id !== payload.id)
						: state.orders.map(el => {
								if (el.id === payload.id) {
									return {
										...el,
										quantity: el.quantity - 1
									};
								}
								return el;
						  })
			};
		}
		case 'INCREMENT_QTY':
			return {
				...state,
				orders: state.orders.map(el => {
					if (el.id === payload.id) {
						return {
							...el,
							quantity: el.quantity + 1
						};
					}
					return el;
				})
			};
		case 'TOGGLE_BASKET':
			return {
				...state,
				isBasketShow: !state.isBasketShow
			};
		case 'CLOSE_ALERT':
			return {
				...state,
				alertName: ''
			};
		default:
			return state;
	}
}
