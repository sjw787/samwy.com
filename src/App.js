import './App.scss';
import Home from './pages/Home'
import Skills from './pages/Skills'

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="link-section">
        <nav>
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/skills">Skills</Link> </li>
          </ul>
        </nav>

        <Routes>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
