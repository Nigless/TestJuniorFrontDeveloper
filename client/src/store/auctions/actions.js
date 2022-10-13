export const AUCTIONS_UPDATED = 'AUCTIONS_UPDATED';
export const auctionsUpdated = (payload = []) => ({
  type: AUCTIONS_UPDATED,
  payload,
});

export const SEARCH_UPDATED = 'SEARCH_UPDATED';
export const searchUpdated = (payload) => ({
  type: SEARCH_UPDATED,
  payload,
});

export const SECONDS_UPDATED = 'SECONDS_UPDATED';
export const secondsUpdated = () => ({
  type: SECONDS_UPDATED,
});
