const ITEMS_NEEDED = 8;

const filterShopItems = items => {
	const cloneItems = [...items].slice(0, ITEMS_NEEDED);

	return cloneItems.map(
		({ offerId, displayName, displayDescription, price, granted }) => ({
			id: offerId,
			name: displayName,
			description: displayDescription,
			price: price.finalPrice,
			imageURL: granted[granted.length - 1].images.full_background
		})
	);
};

export default filterShopItems;
