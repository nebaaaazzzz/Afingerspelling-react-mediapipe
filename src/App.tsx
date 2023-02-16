import { HandAnalyzer } from './HandUtils/HandAnalyzer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InitialPage from './pages/InitialPage';
import SelectLevel from './pages/SelectLevel';
import Game from './pages/Game';
import SelectHand from './pages/SelectHand';
import StartLevel from './pages/StartLevel';
import LevelCompleted from './pages/LevelCompleted';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<InitialPage />} />
          <Route path="select-hand" element={<SelectHand />} />
          <Route path="select-level" element={<SelectLevel />} />
          <Route path="start-level" element={<StartLevel />} />
          <Route path="level-completed" element={<LevelCompleted />} />
          <Route path="game" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
