import React from 'react';
import Image from 'next/image'
import PropTypes from 'prop-types';
import { Link } from 'next/link';
import { formatNumber } from '../../../utils/functions';

const freeShipping = (free_shipping) => {
    console.log('[FreeShipping]', free_shipping);
    if (free_shipping === true) {
        return <img layout='fill' className="shipping img-fluid" alt="Free Shipping" src="/ic_shipping.png" />;
    }
    return null;
};
/* const linkRedirect = () => {
    console.log('Redirect');
}; */
const Product = ({ picture, id, title, price, free_shipping, city }) => {
    picture = picture.replace('-I.jpg', '-V.jpg');
    return (
      <div className="product d-flex">
        <a href={`/items/${id}`}>
          <div className="image" title={title}>
            <img className="rounded img-fluid" alt={title} src={picture} />
          </div>
        </a>
        <div className="descrip col">
          <div className="descrip__top d-flex align-items-center mb-32">
            <div className="price">
              <p className="t4">
                $
                {formatNumber(price)}
              </p>
            </div>
            {freeShipping(free_shipping)}
            <div className="city col"><p className="p1">{city}</p></div>
          </div>
          <a href={`/items/${id}`}>
            <div className="descrip__bottom" title={title}>
              <p className="p4">{title}</p>
            </div>
          </a>
        </div>
        <style jsx>
          {`
            .product {
              padding: 16px 0;
            }
            .product:first-child {
                padding-top: 0;
            }
            .product:last-child {
                padding-bottom: 0;
            }
            .image { 
                width: 180px;
                max-width: 100%;
                border-radius: 4px;
            }
            .descrip {
                padding-left: 16px;
            }
            .descrip .shipping {
                height: auto;
                margin-left: 10px;
            }
            .descrip .city  p {
                justify-content: flex-end;
                text-align: right;
              }
            `}
        </style>
      </div>
    );
};

Product.propTypes = {
    picture: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    free_shipping: PropTypes.bool,
    city: PropTypes.string,
};

Product.defaultProps = {
    picture: '',
    id: '',
    title: '',
    price: null,
    free_shipping: false,
    city: '',
};

export default Product;
