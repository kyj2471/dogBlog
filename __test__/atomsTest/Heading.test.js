import React from 'react';
import { render } from '@testing-library/react';
import Heading from '../../components/atoms/Heading';

describe('<HEADING>', () => {
  it('test h1 tag', () => {
    const text = 'text';
    const { getByText } = render(<Heading text={text} />);

    expect(getByText('text')).toBeInTheDocument();
    expect(getByText('text')).toMatchSnapshot();
  });
});
