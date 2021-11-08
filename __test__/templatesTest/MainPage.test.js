import React from 'react';
import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import MainPageTemplate from '../../components/templates/MainPageTemplate';
import order from '../../fixture/order';
import mainPage from '../../fixture/mainPage';

jest.mock('react-redux');
describe.skip('<MAIN PAGE TEMPLATE>', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({
      order,
      mainPage
    })
  );
  console.log(mainPage);
  const card = mainPage.length;
  console.log(card.length);
  it('test mainpage is rendered', () => {
    const { getByText } = render(<MainPageTemplate />);
    expect(getByText(/dog/i)).toBeInTheDocument();
    expect(getByText(/profile/i)).toBeInTheDocument();
    expect(getByText(/register/i)).toBeInTheDocument();
  });
});
