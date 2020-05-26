import React from 'react';
import { KeyResult } from '../../store/store';
import { KeyResultView } from '../KeyResultView/KeyResultView';
import styled from 'styled-components';

const OKRWrapper = styled.div`
  width: 450px;
  background-color: #fffff0;
  border-radius: 15px;
  margin: 0 auto;
  padding: 25px;
`;

const ObjectiveH2 = styled.h2`
  color: #333333;
`;

const Description = styled.p`
  color: #555555;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export interface OKRViewProps {
  objective: string;
  description: string;
  keyResults: KeyResult[];
}

export const OKRView = (props: OKRViewProps) => {
  const { objective, description, keyResults } = props;
  return (
    <>
      <OKRWrapper>
        <ObjectiveH2>{objective}</ObjectiveH2>
        <Description>{description}</Description>
        {keyResults.map((kr) => (
          <KeyResultView key={kr.id} keyResult={kr} />
        ))}
      </OKRWrapper>
    </>
  );
};
