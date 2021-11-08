import React, { memo } from 'react';
import Link from 'next/link';
import Heading from '../atoms/Heading';
import styled from 'styled-components';

const Header = memo(() => (
  <HeaderWrapper>
    <Link href="/Profile">
      <a>
        <Heading text="Profile" />
      </a>
    </Link>
    <Link href="/">
      <a>
        <Heading text="Dog" />
      </a>
    </Link>
    <Link href="/Register">
      <a>
        <Heading text="Register" />
      </a>
    </Link>
  </HeaderWrapper>
));
export default Header;

//네이밍 규칙
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
`;
