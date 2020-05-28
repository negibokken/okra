import React from 'react';
import { useDispatch } from 'react-redux';
import { Line } from 'rc-progress';
import styled, { ThemeProvider } from 'styled-components';
import {
  decrementProgressCreator,
  incrementProgressCreator,
  KeyResult,
} from '../../store/store';
import prize from '../resources/prize.svg';
import plus from '../resources/plus.svg';
import minus from '../resources/minus.svg';

const KeyResultWrapper = styled.div`
  width: 350px;
  background-color: ${(props: any) => props.theme.bg};
  padding: 15px;
  border-radius: 15px;
  margin: 5px;
  position: relative;
`;

const StyledHead = styled.h3`
  padding: 0;
  margin: 0;
  color: #333333;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  padding-top: 5px;
`;

const PrizeImg = styled.img`
  position: absolute;
  top: 0px;
  right: 5px;
  width: 45px;
  z-index: 1;
  display: ${(props) => props.theme.display};
`;

const ButtonImg = styled.img`
  width: 35px;
`;

const theme = {
  main: { bg: '#eeeeee', display: 'none' },
  completed: { bg: '#ffedab', display: 'block' },
};

export interface KeyResultProps {
  keyResult: KeyResult;
}

export const KeyResultView: React.FC<KeyResultProps> = (
  props: KeyResultProps
) => {
  const { keyResult } = props;
  const dispatch = useDispatch();
  const { title, id, completedTasks, totalTasks } = keyResult;
  const isCompleted = completedTasks === totalTasks;
  return (
    <ThemeProvider theme={isCompleted ? theme.completed : theme.main}>
      <KeyResultWrapper>
        <PrizeImg src={prize} />
        <StyledHead>{title}</StyledHead>
        <div>
          {completedTasks}/{totalTasks}
        </div>
        <Line
          percent={(completedTasks / totalTasks) * 100}
          strokeWidth={2}
          strokeColor="#00a3af"
        />
        <StyledButton onClick={() => dispatch(incrementProgressCreator(id))}>
          <ButtonImg src={plus} />
        </StyledButton>
        <StyledButton onClick={() => dispatch(decrementProgressCreator(id))}>
          <ButtonImg src={minus} />
        </StyledButton>
      </KeyResultWrapper>
    </ThemeProvider>
  );
};
