export const PRODUCT_FILTER_NAME = 999
export const filterProductName = (filter) => ({
	type: PRODUCT_FILTER_NAME,
	productFilter: filter
})

export const PRODUCT_FILTER_STOCKED = 998
export const filterProductStocked = (isStocked) => ({
	type: PRODUCT_FILTER_STOCKED,
	productStocked: isStocked
})
