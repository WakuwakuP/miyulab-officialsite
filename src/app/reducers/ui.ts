import { reducerWithInitialState } from 'typescript-fsa-reducers';
import uiActions from '../actions/uiActions';

export interface UiState {
  firstView: boolean;
}

const initialState: UiState = {
  firstView: true,
};

export const uiReducer = reducerWithInitialState(initialState)
  .case(uiActions.firstView, (state) => {
    const firstView = false;
    return { ...state, firstView };
  });
