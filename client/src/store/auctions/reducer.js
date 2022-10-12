import produce from 'immer';
import {
  updateAuctions,
  UPDATE_AUCTIONS,
  UPDATE_SEARCH,
} from './actions';
import polling from '../utils/polling';

export default (state = {
  isLoading: true,
  list: [],
}, {
  type,
  payload,
} = {}) => {
  switch (type) {
    case UPDATE_AUCTIONS:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.list = payload;
      });
    case UPDATE_SEARCH:
      if (state.isLoading) return state;
      return produce(state, (draft) => {
        draft.isLoading = true;
      });
    default:
      return state;
  }
};

export const startAuctionsPolling = (dispatch, query = {}) => polling(
  '/filterAuctions',
  ((response) => dispatch(updateAuctions(response.auctions))),
  query,
);
