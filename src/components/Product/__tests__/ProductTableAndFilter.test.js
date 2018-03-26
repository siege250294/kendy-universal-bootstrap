import React from 'react';
import { shallow } from 'enzyme';
import ProductTableAndFilter from '../ProductTableAndFilter';

it('Should render Filterable Product correct', () => {
    shallow(<ProductTableAndFilter productFilter="" products={[]} />);
});
