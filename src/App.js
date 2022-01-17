import React, {useState, useEffect} from 'react';
import './App.scss';
import Home from './pages/Home';
import Skills from './pages/Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavBar from "./components/NavBar";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  // const [toggleMenu, setToggleMenu] = useState(false)
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  //
  // const toggleNav = () => {
  //   setToggleMenu(!toggleMenu)
  // }
  //
  // useEffect(() => {
  //   const changeWidth = () => {
  //     setScreenWidth(window.innerWidth);
  //   }
  //
  //   window.addEventListener('resize', changeWidth)
  //
  //   return () => {
  //     window.removeEventListener('resize', changeWidth)
  //   }
  // }, [])

  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </div>
  )


  // return (
  //   <BrowserRouter>
  //     <div className="navbar_container">
  //
  //       <nav className="navbar">
  //         {(toggleMenu || screenWidth > 500) && (
  //           <ul className="navbar_list">
  //             <li className="navbar_item title_item"><Link to="/"> Sam Wylock </Link></li>
  //             <li className="navbar_item"> <Link to="/">Home</Link> </li>
  //             <li className="navbar_item"> <Link to="/skills">Skills</Link> </li>
  //           </ul>
  //         )}
  //         <button className="navbar_button" onClick={toggleNav}>
  //           <FontAwesomeIcon className="navbar_button_icon" icon={faBars} size="3x" />
  //         </button>
  //       </nav>
  //
  //       <Routes>
  //         <Route index element={<Home />} />
  //         <Route path="skills" element={<Skills />} />
  //       </Routes>
  //     </div>
  //   </BrowserRouter>
  // );
}

export default App;
