import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../../components/molecules/Card';

describe('<CARD>', () => {
  it('test card component', () => {
    render(<Card />);
    expect(screen.getByRole('img')).toBeTruthy();
  });
  it('conditional renderting', async () => {
    const breedGroup = 'test';
    const name = 'test2';
    render(<Card breedGroup={breedGroup} name={name} />);
    expect(await screen.queryByText('breed:test')).toBeInTheDocument();
    expect(await screen.queryByText('name:test2')).toBeInTheDocument();
  });
});
