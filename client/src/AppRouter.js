import {  Route, Routes } from "react-router-dom";
import Home  from './Components/Pages/Home';
import { Navbar } from "./Components/Utilities/Navbar";


//scss
import './scss/override.scss'
import './scss/shapes.scss'

// Components




//HOC for protected routes and location functionality
const ProtectedRoute  = (Component) => {
  // setNewActiveTab(rest.location.pathname)
  return (
        <>
          <Navbar  />
          {Component}
        </>
  );
};



function AppRouter() {
  return (
    <>
      <Routes>
          <Route default path="/" element={ProtectedRoute(<Home/>)} />
          <Route path="about" element={ProtectedRoute(<Home/>)} />
      </Routes>
    </>
    
  );
}

export default AppRouter;
