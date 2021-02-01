import React from 'react';
import PropTypes from 'prop-types';
import Product from './product';

const renderItems = (items) => {
  if (items !== null) {
    return items.map((i) => (
      <Product
        key={i.id}
        id={i.id}
        title={i.title}
        price={i.price.amount}
        picture={i.picture}
        city={i.city}
        condition={i.condition}
        free_shipping={i.free_shipping}
      />
    ));
  }
  return null;
};
const ProductList = ({ items }) => <div className="productList">{renderItems(items)}</div>;

ProductList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
ProductList.defaultProps = {
  items: [],
};

export default ProductList;
