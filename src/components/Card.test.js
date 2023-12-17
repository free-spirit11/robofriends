import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('expect to render Card component', () => {
    const mockProps = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
    };
    expect(shallow(<Card {...mockProps} />)).toMatchSnapshot();
});
