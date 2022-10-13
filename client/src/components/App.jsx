import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './pages/MainPage';
import InfoPage from './pages/InfoPage';

const Heading = styled.h2`
  text-align: center;
  font-weight: lighter;
  font-size: 3em;
  color: #555
`;

function App() {
  return (
    <Router>

      <Heading>Aукционы</Heading>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auction/:id" element={<InfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
