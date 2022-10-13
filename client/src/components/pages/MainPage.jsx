import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { useEffect } from 'react';
import { searchUpdated } from '../../store/auctions/actions';
import Main from '../Main';
import { startPolling, startTick } from '../../store/auctions/reducer';

function MainPage({ list, loading, search }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const stopTick = startTick(dispatch);
    return stopTick;
  }, []);

  useEffect(() => {
    const stopPolling = startPolling(dispatch, search);
    return stopPolling;
  }, [search]);

  const onSearchChange = debounce((value) => dispatch(searchUpdated(value)), 300);

  return <Main list={list} loading={loading} onSearchChange={onSearchChange} />;
}

MainPage.propTypes = {
  list: PropTypes.arrayOf({}),
  loading: PropTypes.bool,
  search: PropTypes.string,
};

MainPage.defaultProps = {
  list: [],
  loading: false,
  search: '',
};

export default connect((state) => ({
  list: state.auctions.list,
  loading: state.auctions.isLoading,
  search: state.auctions.search,
}))(MainPage);
