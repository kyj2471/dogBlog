import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Img from '../../components/atoms/Img';

describe('<IMG>', () => {
  it('test img tag', () => {
    const alt = 'testImg';
    const src = '/star.png';
    render(<Img src={src} alt={alt} />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '/star.png');
    expect(image).toHaveAttribute('alt', 'testImg');
  });
});
