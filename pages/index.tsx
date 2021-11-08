import React from 'react';
import { END } from '@redux-saga/core';
import { GetStaticProps } from 'next';
import styled from 'styled-components';
import { wrapper } from '../store/store';
import MainPageTemplate from '../components/templates/MainPageTemplate';
import * as actions from '../store/modules/actions';

const Home = () => {
  return (
    <FullWrapper>
      <title>TONY-Project</title>
      <MainPageTemplate />
    </FullWrapper>
  );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  async ({ store }) => {
    store.dispatch(actions.getMainCard(50, 0, 'ASC'));
    store.dispatch(END);
    await store.sagaTask?.toPromise();
  }
);

export default Home;

const FullWrapper = styled.div`
  max-width: 850px;
  margin: 0 auto;
  text-align: center;
`;
