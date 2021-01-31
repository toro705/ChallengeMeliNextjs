import React from 'react';
const categorias = ['categoria 1', 'categoria 2', 'categoria 3']
const renderCrumbs = (props) => categorias.map((i) => (<li key={props.id} className="breadcrumb-item"><a href="/" className="color-2">{i}</a></li>));
const BreadCrumb = (props) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      {renderCrumbs(props)}
    </ol>
    <style jsx>
      {`
        .breadcrumb {
            background-color: transparent;
            margin-bottom: 0;
            padding: 16px 0;
        }
        p {
            margin-bottom:0
        }
      `}
    </style>
  </nav>

);
export default BreadCrumb;
