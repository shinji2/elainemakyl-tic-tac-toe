import React, {useState, FC} from 'react';
import Button from './components/Button';
import Board from './layouts/Board';
import styled from 'styled-components';

const App: FC = () => {
  const [started, setStarted] = useState(false);

  const newGameBtnHandler = () => {
    setStarted(true);
  };

  return (
    <AppContainer className="App">
      {started ? (
        <Board />
      ) : (
        <Button text="New Game" bgColor="#31C3BD" handler={newGameBtnHandler} />
      )}
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default App;
