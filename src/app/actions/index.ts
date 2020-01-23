import auth from './authActions';
import question from './questionActions';
import ui from './uiActions';

export default {
  ...auth,
  ...question,
  ...ui,
};
