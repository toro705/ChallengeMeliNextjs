import React from 'react';
import SearchBar from './searchbar';

const Navbar = () => (
  <nav className="navbar navbar-expand-md bg-warning">
    <div className="container align-items-center">
      <a className="d-flex" href="/"><img src="/Logo_ML.png" className="img-fluid" alt="MercadoLibre" /></a>
      <SearchBar />
    </div>
  </nav>
    );
export default Navbar;
