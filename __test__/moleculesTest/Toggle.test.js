import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Toggle from '../../components/molecules/Toggle';

describe('<TOGGLE>', () => {
  it('test img component is rendered', () => {
    render(<Toggle />);
    const image = screen.getByRole('img');
    expect(image).toBeTruthy();
    expect(image).toHaveAttribute('alt', 'test');
  });

  it('test toggling image is work', () => {
    const src1 = '/yellowstar.png';
    const src2 = '/star.png';
    const handleToggle = jest.fn();
    render(<Toggle src1={src1} src2={src2} handleToggle={handleToggle} />);
    const image = screen.getByRole('img');

    expect(image).toHaveAttribute('src', '/star.png');
    fireEvent.click(image);
    expect(image).toHaveAttribute('src', '/yellowstar.png');
    fireEvent.click(image);
    expect(image).toHaveAttribute('src', '/star.png');
    fireEvent.click(image);
    expect(image).toHaveAttribute('src', '/yellowstar.png');
  });
});
