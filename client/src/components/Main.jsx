// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Card from './Card';
import Preloader from './Preloader';
import Container from './Container';

const Face = styled.div`
  font-size: 3.2em;
  font-weight: bold;
  color: #777;
  margin-bottom: 30px;
`;
const Placeholder = styled.div`
  position: relative;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444;
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
    width: calc(${100 / 2}% - 20px)
    
}
@media (min-width: 576px) {&>*{
    width: calc(${100 / 3}% - 20px)}
}
`;
const Input = styled.input`
  box-shadow: 0 0 20px -15px #000;
  display: block;
  width: 100%;
  border: solid 3px #fff;
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
    background: #fff;
  }
`;

function Main({
  list, loading, onSearchChange, onUnmount,
}) {
  useEffect(() => () => onUnmount(), [onUnmount]);

  return (
    <Container>
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
              bid, time, id, imgUrl, title,
            }) => {
              let label;
              if (bid) label = `Ставка: ${bid.toString()} р`;

              return (
                <Card
                  href={`/auction/${id}`}
                  key={id}
                  title={title}
                  subTitle={time === 0 ? 'ЗАВЕРШЕНО' : new Date(time)
                    .toLocaleTimeString('en-US', { minute: '2-digit', second: '2-digit' })}
                  image={process.env.CONFIG.IMAGES_BASEPATH + imgUrl}
                  label={label}
                  disabled={time === 0}
                />
              );
            })}
          </List>
        )}
    </Container>
  );
}

Main.propTypes = {
  list: PropTypes.arrayOf({}),
  loading: PropTypes.bool,
  onSearchChange: PropTypes.func,
  onUnmount: PropTypes.func,
};

Main.defaultProps = {
  list: [],
  loading: false,
  onSearchChange: () => { },
  onUnmount: () => { },
};

export default Main;
