import { Route, Routes } from "react-router-dom";
import { Main } from './pages/Main';
import { AboutMe } from './pages/AboutMe';
import { Skills } from './pages/Skills';
import { Feedback } from './pages/Feedback';

function App() {

  return (
    <Routes>
      <Route path='./' element={<Main/>} />
      <Route path='./aboutme/' element={<AboutMe/>} />
      <Route path='./skills/' element={<Skills/>} />
      <Route path='./feedback/' element={<Feedback/>} />
    </Routes>
  );
}

export default App;
