import './Menu.scss';
import Home from '../../pages/Home'
import Skills from '../../pages/Skills'

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Menu() {
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
          <Link to="/">Home</Link> |{" "}
          <Route index element={<Home/>}/>
        </Routes>

      </div>
    </BrowserRouter>


  );
}

export default Menu;
