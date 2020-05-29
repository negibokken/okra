import React from 'react';
import styled from 'styled-components';

const OKRWrapper = styled.div`
  width: 450px;
  background-color: #fffff0;
  border-radius: 15px;
  margin: 0 auto;
  padding: 25px;
`;

const StyledHead = styled.h3`
  padding: 0;
  margin: 0;
  color: #333333;
`;

export const OKRSettings = () => {
  return (
    <>
      <OKRWrapper>
        <StyledHead>Settings</StyledHead>
        <input />
        <input />
        <input />
      </OKRWrapper>
    </>
  );
};
