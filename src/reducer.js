export function reducer(state, { type, payload }) {
	switch (type) {
		case 'REMOVE_ORDER':
			return {
				...state,
				orders: state.orders.filter(el => el.id !== payload.id)
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
