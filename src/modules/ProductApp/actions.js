export const PRODUCT_FILTER_NAME = 'PRODUCT_FILTER_NAME';
export const filterProductName = (nameFilter) => ({
    type: PRODUCT_FILTER_NAME,
    payload: nameFilter,
});

export const PRODUCT_FILTER_STOCKED = 'PRODUCT_FILTER_STOCKED';
export const filterProductStocked = (isStocked) => ({
    type: PRODUCT_FILTER_STOCKED,
    payload: isStocked,
});
