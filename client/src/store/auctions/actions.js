export const UPDATE_AUCTIONS = 'UPDATE_AUCTIONS';
export const updateAuctions = (payload = []) => ({
  type: UPDATE_AUCTIONS,
  payload,
});

export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const updateSearch = () => ({
  type: UPDATE_SEARCH,
});
