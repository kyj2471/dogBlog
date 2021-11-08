import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SortEngeine from '../../components/organisms/SortEngeine';

describe('<SORT_ENGEINE>', () => {
  it('test sortEngeine is rendered', () => {
    const { getByText, getByPlaceholderText } = render(<SortEngeine />);

    expect(getByPlaceholderText('search')).toBeInTheDocument();
    expect(getByText('search')).toBeInTheDocument();
    expect(getByText('asc')).toBeInTheDocument();
    expect(getByText('desc')).toBeInTheDocument();
  });
  it('test input is working', () => {
    const { getByPlaceholderText } = render(<SortEngeine />);
    expect(getByPlaceholderText('search')).toBeInTheDocument();
    fireEvent.change(getByPlaceholderText('search'), {
      target: {
        value: 'code'
      }
    });
    expect(getByPlaceholderText('search').value).toBe('code');
  });
});
