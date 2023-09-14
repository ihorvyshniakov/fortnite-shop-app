const ITEMS_NEEDED = 8;

const filterShopItems = items => {
	const cloneItems = [...items].slice(0, ITEMS_NEEDED);

	return cloneItems.map(
		({
			offerId,
			mainId,
			displayName,
			displayDescription,
			price,
			granted
		}) => ({
			offerId,
			mainId,
			displayName,
			displayDescription,
			price,
			granted: {
				images: granted[granted.length - 1].images
			}
		})
	);
};

export default filterShopItems;
