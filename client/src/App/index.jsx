// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Card from './Card';

const Root = styled.div`
  max-width: 1000px;
  margin: auto;
`;
const List = styled.div`
  display: flex;
  margin-top: -20px;
  margin-left: -20px;
  flex-wrap: wrap;

  &>*{
    margin-top: 20px;
    margin-left: 20px;
    width: calc(${100 / 3}% - 20px)
  }
`;
const Heading = styled.h2`
  text-align: center;
  font-weight: lighter;
  font-size: 4em;
  color: #666
`;
const Input = styled.input`
  display: block;
  width: 100%;
  border: solid 2px #eee;
  margin-bottom: 20px;
  font-size: inherit;
  font-family: inherit;
  padding: 10px;
  border-radius: 4px;
  transition: 0.2s;

  &:placeholder-shown {
    background: #eee;
  }

  &:focus {
    background: none;
  }
`;

function App() {
  return (
    <Root>
      <Heading>Aукцион</Heading>
      <Input placeholder="Поиск по названию" />
      <List>
        <Card label="TEST" title="Test" subTitle="TEST2" image="https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg" />
        <Card label="TEST" title="Test" subTitle="TEST2" image="https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg" />
        <Card label="TEST" title="Test" subTitle="TEST2" image="https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg" />
        <Card label="TEST" title="Test" subTitle="TEST2" image="https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg" />
        <Card label="TEST" title="Test" subTitle="TEST2" image="https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg" />
        <Card label="TEST" title="Test" subTitle="TEST2" image="https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg" />
        <Card label="TEST" title="Test" subTitle="TEST2" image="https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg" />
      </List>
    </Root>
  );
}

export default App;
