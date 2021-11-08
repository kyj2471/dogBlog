import React from 'react';
import Header from '../../components/organisms/Header';
import { render } from '@testing-library/react';
import router, { useRouter } from 'next/router';

jest.mock('next/router', () => require('next-router-mock'));

describe('<HEADER>', () => {
  it('test header is rendered', () => {
    const { getByText } = render(<Header />);
    expect(getByText(/Profile/i)).toBeInTheDocument();
    expect(getByText(/dog/i)).toBeInTheDocument();
    expect(getByText(/register/i)).toBeInTheDocument();
  });

  it('test routes / is work', () => {
    router.push({
      pathname: '/'
    });
    expect(router).toMatchObject({
      asPath: '/',
      pathname: '/'
    });
  });
  it('test routes /Profile is work', () => {
    router.push({
      pathname: '/Profile'
    });
    expect(router).toMatchObject({
      asPath: '/Profile',
      pathname: '/Profile'
    });
  });
  it('test routes /Register is work', () => {
    router.push({
      pathname: '/Register'
    });
    expect(router).toMatchObject({
      asPath: '/Register',
      pathname: '/Register'
    });
  });
});
