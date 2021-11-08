import React from 'react';
import { render, screen } from '@testing-library/react';
import CardGrid from '../../components/organisms/CardGrid';
import router, { useRouter } from 'next/router';
import axios from 'axios';
import mainPage from '../../fixture/mainPage';

jest.mock('next/router', () => require('next-router-mock'));

describe('<CARD_GRID>', () => {
  it('test dynamic routing is work', () => {
    router.push({
      pathname: '/Detail/[id]',
      query: { id: 'id', imageId: 'imageId' }
    });

    expect(router).toMatchObject({
      asPath: '/Detail/id?imageId=imageId',
      pathname: '/Detail/[id]',
      query: { imageId: 'imageId' }
    });
  });
});
