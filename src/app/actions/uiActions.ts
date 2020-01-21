import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

const uiActions = {
  firstView: actionCreator<void>('UI_FIRST_VIEW'),
};

export default uiActions;
