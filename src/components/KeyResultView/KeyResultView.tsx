import React from 'react';
import { useDispatch } from 'react-redux';
import { Line } from 'rc-progress';
import styled, { ThemeProvider } from 'styled-components';
import { incrementProgressCreator, KeyResult } from '../../store/store';
import {} from 'react-beautiful-dnd';

const KeyResultWrapper = styled.div`
  width: 350px;
  background-color: ${(props: any) => props.theme.bg};
  padding: 15px;
  border-radius: 15px;
  margin: 5px;
`;

const StyledHead = styled.h3`
  padding: 0;
  margin: 0;
  color: #333333;
`;

const StyledButton = styled.button`
  border: none;
  padding: 6px 12px;
  color: white;
  outline: none;
  background: #777777;
  border-radius: 3px;
  font-size: 100%;
`;

const theme = {
  main: { bg: '#eeeeee' },
  completed: { bg: '#ffedab' },
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
          進捗の記録
        </StyledButton>
      </KeyResultWrapper>
    </ThemeProvider>
  );
};
