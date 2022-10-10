// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Card from './Card';

const Root = styled.div`
  max-width: 1000px;
  margin: auto;
`;
const List = styled.div`
  display: flex;
  margin-top: -15px;
  margin-left: -15px;
  flex-wrap: wrap;

  &>*{
    margin-top: 15px;
    margin-left: 15px;
    width: calc(${100 / 3}% - 15px)
  }
`;

function App() {
  return (
    <Root>
      <List>
        <Card label="TEST" title="TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST" subTitle="TEST2" image="https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg" />
        <Card label="TEST" title="TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST" subTitle="TEST2" image="https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg" />
        <Card label="TEST" title="TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST" subTitle="TEST2" image="https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg" />
        <Card label="TEST" title="TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST" subTitle="TEST2" image="https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg" />
        <Card label="TEST" title="TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST" subTitle="TEST2" image="https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg" />
        <Card label="TEST" title="TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST" subTitle="TEST2" image="https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg" />
        <Card label="TEST" title="TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST" subTitle="TEST2" image="https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg" />
      </List>

    </Root>
  );
}

export default App;
