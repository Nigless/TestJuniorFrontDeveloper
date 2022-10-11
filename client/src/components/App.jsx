// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import Card from './Card';
import Preloader from './Preloader';
import { startAuctionsPolling } from '../store/auctions/reducer';
import { updateSearch } from '../store/auctions/actions';

const Root = styled.div`
  max-width: 1000px;
  margin: auto;
`;
const Face = styled.div`
  font-size: 3.2em;
  font-weight: bold;
  color: #999;
  margin-bottom: 30px;
`;
const Placeholder = styled.div`
  position: relative;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  text-align: center;
  flex-direction: column;
`;
const List = styled.div`
  display: flex;
  margin-top: -20px;
  margin-left: -20px;
  flex-wrap: wrap;
  align-items: flex-start;

  &>*{
    margin-top: 20px;
    margin-left: 20px;
    width: calc(${100 / 3}% - 20px)
  }
`;
const Heading = styled.h2`
  text-align: center;
  font-weight: lighter;
  font-size: 3em;
  color: #666
`;
const Input = styled.input`
  display: block;
  width: 100%;
  border: solid 3px #eee;
  margin-bottom: 20px;
  font-size: inherit;
  font-family: inherit;
  padding: 10px;
  border-radius: 4px;
  transition: background 0.2s;

  &:placeholder {
    color: #8c8b8c;
  }

  &:placeholder-shown {
    background: #eee;
  }

  &:focus {
    background: none;
  }
`;

function App({ list, loading, onSearchChange }) {
  return (
    <Root>
      <Heading>Aукцион</Heading>
      <Input placeholder="Поиск по названию" onChange={(e) => onSearchChange(e.target.value)} />
      {loading || list.length === 0
        ? (
          <Placeholder>
            {loading
              ? <Preloader /> : (
                <>
                  <Face>
                    {'¯\\_( ͡•  ͟ʖ ͡•)_/¯'}
                  </Face>
                  По вашему запросу ничего не найдено
                </>
              )}
          </Placeholder>
        )
        : (
          <List>
            {list.map(({
              bid, finishTime, id, imgUrl, title,
            }) => {
              const date = new Date(finishTime - (Date.now() - 10800000));

              let label;
              if (bid) label = `Ставка: ${bid.toString()} р`;

              return (
                <Card
                  key={id}
                  title={title}
                  subTitle={`${parseInt(date / (1000 * 60 * 60), 10)}:${date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`}`}
                  image={process.env.CONFIG.IMAGES_BASEPATH + imgUrl}
                  label={label}
                />
              );
            })}
          </List>
        )}
    </Root>
  );
}

App.propTypes = {
  list: PropTypes.arrayOf({}),
  loading: PropTypes.bool,
  onSearchChange: PropTypes.func,
};

App.defaultProps = {
  list: [],
  loading: false,
  onSearchChange: () => { },
};

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
      onSearchChange: (value) => {
        dispatch(updateSearch(value));
        onSearchChange(value);
      },
    };
  },
)(App);
