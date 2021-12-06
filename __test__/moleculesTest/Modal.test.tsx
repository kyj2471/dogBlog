import React from 'react';
import Modal from '../../components/molecules/Modal';
import { render, screen, fireEvent } from '@testing-library/react';

describe('<MODAL>', () => {
  it('test modal', () => {
    const handleModal = jest.fn();
    const { getByText } = render(<Modal handleModal={handleModal} />);

    expect(screen.getByRole('button')).toBeTruthy();
    expect(screen.getByRole('heading')).toBeTruthy();
    expect(getByText('EXIT')).toBeInTheDocument();
    fireEvent.click(getByText('EXIT'));
    expect(handleModal).toHaveBeenCalledTimes(1);
  });
});
