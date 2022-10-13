import produce from 'immer';
import {
  auctionsUpdated,
  secondsUpdated,
  AUCTIONS_UPDATED,
  SEARCH_UPDATED,
  SECONDS_UPDATED,
} from './actions';
import polling from '../utils/polling';
import tick from '../utils/tick';

export default (state = {
  isLoading: true,
  isError: true,
  list: [],
  search: '',
}, {
  type,
  payload,
} = {}) => {
  switch (type) {
    case AUCTIONS_UPDATED:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.list = payload;
      });
    case SEARCH_UPDATED:
      return produce(state, (draft) => {
        draft.isLoading = true;
        draft.search = payload;
      });
    case SECONDS_UPDATED:
      if (state.isLoading) return state;
      return produce(state, (draft) => {
        draft.list = draft.list.map((i) => {
          i.time = i.time - 1000 > 0 ? i.time - 1000 : 0;
          return i;
        });
      });
    default:
      return state;
  }
};

export const startPolling = (dispatch, search) => polling(
  '/filterAuctions',
  ((response) => dispatch(auctionsUpdated(response.auctions.map((a) => {
    a.time = a.finishTime - Date.now() > 0 ? a.finishTime - Date.now() : 0;
    delete a.finishTime;
    return a;
  })))),
  search && {
    search,
  },
);

export const startTick = (dispatch) => tick(() => dispatch(secondsUpdated()), 1000);
