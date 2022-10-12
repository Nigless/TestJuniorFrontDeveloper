import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import { startAuctionsPolling } from '../../store/auctions/reducer';
import { updateSearch } from '../../store/auctions/actions';
import Main from '../Main';

export default connect(
  (state) => ({ list: state.auctions.list, loading: state.auctions.isLoading }),
  (dispatch) => {
    let stopAuctionsPolling = startAuctionsPolling(dispatch);
    const onSearchChange = debounce((value) => {
      if (value === '') {
        stopAuctionsPolling();
        stopAuctionsPolling = startAuctionsPolling(dispatch);
        return;
      }

      stopAuctionsPolling();
      stopAuctionsPolling = startAuctionsPolling(dispatch, { search: value });
    }, 300);
    return {
      onSearchChange(value) {
        dispatch(updateSearch(value));
        onSearchChange(value);
      },
      onUnmount() {
        stopAuctionsPolling();
      },
    };
  },
)(Main);
