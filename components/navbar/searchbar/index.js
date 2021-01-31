import React from 'react';
import Router from 'next/router';

const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target[0].value;
    // eslint-disable-next-line no-undef
    Router.push({
        pathname: '/items',
        query: { search: searchValue },
    })
};
const Searchbar = () => (
  <form className="input-group" onSubmit={handleSubmit}>
    <input className="form-control me-2" type="search" placeholder="Nunca dejes de buscar" aria-label="Search" />
    <button className="input-group-text" type="submit"><img src="/ic_Search.png" className="img-fluid" alt="Lupa" /></button>
    <style jsx>
      {`
        form {
            margin-bottom: 0;
            padding-left: 25px;
        }
        form input {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
        form button.input-group-text {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
        Image {
          max-width: 100%;
          height: auto;
          display: inline-block;
        }
      `}
    </style>
  </form>
    );
export default Searchbar;
