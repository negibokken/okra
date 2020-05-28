import { createStore } from 'redux';

export enum Types {
  INCREMENT_PROGRESS = 'INCREMENT_PROGRESS',
  DECREMENT_PROGRESS = 'DECREMENT_PROGRESS',
}

type IncrementAction = { type: Types.INCREMENT_PROGRESS; payload: number };
type DecrementAction = { type: Types.DECREMENT_PROGRESS; payload: number };
type AppActions = IncrementAction | DecrementAction;

export const incrementProgressCreator = (id: number): IncrementAction => {
  return { type: Types.INCREMENT_PROGRESS, payload: id };
};
export const decrementProgressCreator = (id: number): DecrementAction => {
  return { type: Types.DECREMENT_PROGRESS, payload: id };
};

export interface KeyResult {
  id: number;
  title: string;
  totalTasks: number;
  completedTasks: number;
}

export interface AtomicOKR {
  id: number;
  objective: string;
  description: string;
  keyResults: KeyResult[];
}

export interface AppState {
  okr: AtomicOKR;
}
const initialState = {
  okr: {
    id: 1,
    objective: 'test',
    description:
      'This is a test OKR. I focus on to do these. And got something after this.',
    keyResults: [
      {
        id: 1,
        title: 'test',
        totalTasks: 15,
        completedTasks: 0,
      },
      {
        id: 2,
        title: 'test2',
        totalTasks: 35,
        completedTasks: 35,
      },
      {
        id: 3,
        title: 'test3',
        totalTasks: 25,
        completedTasks: 20,
      },
    ],
  },
};

const reducer = (state: AppState = initialState, action: AppActions) => {
  console.log(`[#${action.type}]`);
  switch (action.type) {
    case Types.INCREMENT_PROGRESS: {
      const okr = { ...state.okr };
      const keyResults = [...okr.keyResults];
      const idx = keyResults.findIndex((i) => i.id === action.payload);
      if (idx !== -1) {
        if (keyResults[idx].completedTasks < keyResults[idx].totalTasks)
          keyResults[idx].completedTasks++;
      }
      okr.keyResults = keyResults;
      return { ...state, okr };
    }
    case Types.DECREMENT_PROGRESS: {
      const okr = { ...state.okr };
      const keyResults = [...okr.keyResults];
      const idx = keyResults.findIndex((i) => i.id === action.payload);
      if (idx !== -1) {
        if (keyResults[idx].completedTasks > 0)
          keyResults[idx].completedTasks--;
      }
      okr.keyResults = keyResults;
      return { ...state, okr };
    }
    default: {
      return state;
    }
  }
};

export const store = createStore(
  reducer,
  (window as any).hasOwnProperty('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__')
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : undefined
);
