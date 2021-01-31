import React from 'react';
import PropTypes from 'prop-types';
import Product from './product/';

const renderItems = (items) => {
    console.log('[ProductList Items]', items);
    if (items !== null) {
        return items.map((i) => (
          <Product
            key={i.id}
            id={i.id}
            title={i.title}
            free_shipping={i.free_shipping}
            picture={i.picture}
            price={i.price.amount}
            city={i.city}
          />
));
    }
    return null;
};
const ProductList = ({ items }) => (
  <div className="productList">
    {renderItems(items)}
  </div>
);

ProductList.propTypes = {
    items: PropTypes.array,
  };
ProductList.defaultProps = {
    items: [],
};

export default ProductList;
