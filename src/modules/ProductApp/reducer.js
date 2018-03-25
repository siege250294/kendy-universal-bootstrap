import { PRODUCT_FILTER_NAME, PRODUCT_FILTER_STOCKED } from './actions';
import { Record, List, Map } from 'immutable';

// Setting up a initial state by using Immutable Map instance
const FilterRecord = Record({
    name: '',
    category: '',
    stocked: false,
});
const initialState = Map({
    filter: new FilterRecord(),
    products: List([
        {
            category: 'Sporting Goods',
            price: '$49.99',
            stocked: true,
            name: 'Football',
        },
        {
            category: 'Sporting Goods',
            price: '$9.99',
            stocked: true,
            name: 'Baseball',
        },
        {
            category: 'Sporting Goods',
            price: '$29.99',
            stocked: false,
            name: 'Basketball',
        },
        {
            category: 'Electronics',
            price: '$99.99',
            stocked: true,
            name: 'iPod Touch',
        },
        {
            category: 'Electronics',
            price: '$399.99',
            stocked: false,
            name: 'iPhone 5',
        },
        {
            category: 'Electronics',
            price: '$199.99',
            stocked: true,
            name: 'Nexus 7',
        },
    ]),
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_FILTER_NAME:
            return state.set(
                'filter',
                state.get('filter').set('name', action.payload)
            );
        case PRODUCT_FILTER_STOCKED:
            return state.set(
                'filter',
                state.get('filter').set('stocked', action.payload)
            );
        default:
            return state;
    }
};

export default reducer;
