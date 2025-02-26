import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../App.css";
import logo from '../image/logo.png';
import NavItems from './Navitem';


export default function Navbar() {
  

  return (
    <>
      
    
      <header className="header-area header-sticky headerback">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
               
                <Link to="/" >
                  <img src={logo} alt="Logo" className="logo"/>
                </Link>

                <ul className="nav">
                  
                  {NavItems.map((item, index) => (
                    <li key={index}>
                      <Link to={item.path}>{item.Name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Outlet />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}


