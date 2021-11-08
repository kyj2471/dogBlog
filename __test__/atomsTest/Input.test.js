import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../../components/atoms/Input';

describe('<INPUT>', () => {
  it('test every input props', () => {
    const placeholder = 'search';
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholder} handleChange={handleChange} />
    );
    expect(getByPlaceholderText(/search/i)).toBeInTheDocument();
    fireEvent.change(getByPlaceholderText(/search/i), {
      target: {
        value: 'test'
      }
    });
    expect(getByPlaceholderText('search').value).toBe('test');
  });
});
