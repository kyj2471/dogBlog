import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .pageNotFound {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 300px;
    border: 5px solid black;
    border-radius: 5px;
    font-size: 50px;
  }
`;

export default function Error404() {
  return (
    <ErrorWrapper>
      <div className="pageNotFound">Error</div>
    </ErrorWrapper>
  );
}
