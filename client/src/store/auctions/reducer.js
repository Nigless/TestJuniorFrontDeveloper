import produce from 'immer';
import {
  updateAuctions,
  updateSearch,
} from './actions';

export default (state = {
  isLoading: true,
  list: [],
}, {
  type,
  payload,
} = {}) => {
  switch (type) {
    case updateAuctions:
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.list = payload;
      });
    case updateSearch:
      if (state.isLoading) return state;
      return produce(state, (draft) => {
        draft.isLoading = true;
      });
    default:
      return state;
  }
};

export const startAuctionsPolling = (dispatch, query = {}) => {
  const url = new URL(`${process.env.CONFIG.API_BASEPATH}/filterAuctions`);
  url.search = new URLSearchParams(query);
  let timer = null;
  const refetch = async () => {
    timer = setTimeout(refetch, process.env.CONFIG.POLLING_INTERVAL * 1000);
    const response = await (await fetch(url.toString())).json();
    dispatch(updateAuctions(response.auctions));
  };
  refetch();

  return () => {
    clearTimeout(timer);
    dispatch = () => {};
  };
};
