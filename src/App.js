import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavLink from './components/NavLink';

function App() {
  return (
    <>
      <NavLink />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
