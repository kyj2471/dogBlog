import ProfilePageTemplate from '../../components/templates/ProfilePageTemplate';
import { render, fireEvent, screen } from '@testing-library/react';

describe('<ProfilePageTemplate>', () => {
  it('test ProfilePageTemplate is rendered', () => {
    const { getByText } = render(<ProfilePageTemplate />);
    expect(getByText(/like/i)).toBeInTheDocument();
    expect(getByText(/enjoy/i)).toBeInTheDocument();
    expect(getByText(/regist/i)).toBeInTheDocument();
  });
});
