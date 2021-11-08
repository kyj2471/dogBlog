import React from 'react';
import { render } from '@testing-library/react';
import Paragraph from '../../components/atoms/Paragraph';

describe('<PARAGRAPH>', () => {
  it('test paragraph tag', () => {
    const text = 'sample';
    const { getByText } = render(<Paragraph text={text} />);

    expect(getByText('sample')).toBeInTheDocument();
    expect(getByText('sample')).toMatchSnapshot();
  });
});
