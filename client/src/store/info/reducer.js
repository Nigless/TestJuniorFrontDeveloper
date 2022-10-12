import produce from 'immer';
import {
  UPDATE_DATA,
  UPDATE_PAGE,
} from './actions';

export default (state = {
  isLoading: true,
}, {
  type,
  payload,
} = {}) => {
  switch (type) {
    case UPDATE_DATA:
      payload.isLoading = false;
      return payload;

    case UPDATE_PAGE:
      return produce(state, (draft) => {
        draft.isLoading = true;
      });
    default:
      return state;
  }
};
