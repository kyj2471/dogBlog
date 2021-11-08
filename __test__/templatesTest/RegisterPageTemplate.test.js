import RegisterPageTemplate from '../../components/templates/RegisterPageTemplate';
import axios from 'axios';
import { render, screen, fireEvent } from '@testing-library/react';

describe('<RegisterPageTemplate>', () => {
  it('test registerPageTemplate is rendered', () => {
    const { getByText } = render(<RegisterPageTemplate />);
    expect(getByText(/dog/i)).toBeInTheDocument();
    expect(getByText(/profile/i)).toBeInTheDocument();
    expect(getByText(/register/i)).toBeInTheDocument();
    expect(getByText(/upload/i)).toBeInTheDocument();
  });

  // it('test registerPageTemplate data', () => {
  //   const { getByText } = render(<RegisterPageTemplate />);
  //   const handleUpload = jest.fn();
  //   const spyGet = jest.spyOn(axios, 'get');
  //   const image = screen.getByRole('img');
  //   expect(spyGet).toBeCalledTimes(0);
  //   expect(getByText(/upload/i)).toBeInTheDocument();
  //   fireEvent.click(getByText(/upload/i));
  //   expect(image).toBeTruthy();
  // });
});
