import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavLink from './components/NavLink';
import LiguesDatails from './components/LiguesDatails';

function App() {
  return (
    <>
      <NavLink />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<LiguesDatails />} />
      </Routes>
    </>
  );
}

export default App;
