import React from 'react';
import { AppState } from '../../store/store';
import { useSelector } from 'react-redux';
import { OKRView } from '../OKRView/OKRView';
import styled from 'styled-components';
import { ContributionCalendar } from '../ContributionCalendar/ContributionCalendar';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #b0e0e6;
  padding: 35px 0;
  padding-top: 15px;
`;

const StyledHeader = styled.header`
  width: 100wh;
  background-color: #00a3af;
  height: 15px;
  padding: 15px;
  color: #ffffff;
  font-weight: bold;
`;

const App: React.FC = () => {
  const okr = useSelector((state: AppState) => {
    return state.okr;
  });
  return (
    <>
      <StyledHeader>OKRA | An OKR Management App</StyledHeader>
      <Wrapper>
        <OKRView {...okr} />
        <ContributionCalendar />
      </Wrapper>
    </>
  );
};

export default App;
