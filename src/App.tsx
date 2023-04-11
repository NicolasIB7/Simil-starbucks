import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "../src/Components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import Footer from "../src/Components/Footer/Footer";
import Menu from "../src/Components/Views/Menu/Menu";
import Experiencia from "../src/Components/Views/Experiencia/Experiencia";
import Cafe from "../src/Components/Views/Cafe/Cafe";
import Landing from "../src/Components/Views/Landing/Landing";
import CafeCalientes from './Components/Views/Menu/Tipos/CafeCalientes';
import CafeHelados from './Components/Views/Menu/Tipos/CafeHelados';
import Calientes from './Components/Views/Menu/Tipos/Calientes';
import Frapuccino from './Components/Views/Menu/Tipos/Frapuccino';
import TeHelado from './Components/Views/Menu/Tipos/TeHelado';




function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Routes>
        <Route  path='/menu' element={<Menu/>}/>
        <Route  path='/experiencia' element={<Experiencia/>}/>
        <Route  path='/cafe' element={<Cafe/>}/>
        <Route  path='/' element={<Landing/>}/>
        <Route  path='/menu/Cafés calientes' element={<CafeCalientes/>}/>
        <Route  path='/menu/Cafés helados' element={<CafeHelados/>}/>
        <Route  path='/menu/Calientes' element={<Calientes/>}/>
        <Route  path='/menu/Frapuccino' element={<Frapuccino/>}/>
        <Route  path='/menu/Té helado' element={<TeHelado/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
