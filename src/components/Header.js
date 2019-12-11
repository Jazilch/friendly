'use es6';

import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  color: #fff;
  font-family: cursive;
  margin: 0;
  font-size: 36px;
  padding: 3px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Friendly</HeaderTitle>
    </HeaderWrapper>
  );
};

export default Header;
