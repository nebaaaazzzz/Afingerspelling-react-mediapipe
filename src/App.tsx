import { HandAnalyzer } from "./HandUtils/HandAnalyzer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialPage from "./pages/InitialPage";
import SelectLevel from "./pages/SelectLevel";
import Game from "./pages/Game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<InitialPage />} />
          <Route path="select-level" element={<SelectLevel />} />
          <Route path="game" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
