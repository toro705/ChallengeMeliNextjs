/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { formatNumber } from '../../../utils/functions';

const freeShipping = (free_shipping) => {
  if (free_shipping === true) {
    return (
      <>
        <img
          layout="fill"
          className="shipping img-fluid"
          alt="Free Shipping"
          src="/ic_shipping.png"
        />
        <style jsx>
          {`
                        .shipping {
                            height: auto;
                            margin-left: 10px;
                        }
                    `}
        </style>
      </>
    );
  }
  return null;
};
/* const linkRedirect = () => {
    console.log('Redirect');
}; */
const Product = ({
  picture, id, title, price, free_shipping, city,
}) => {
  const pictureModified = picture.replace('-I.jpg', '-V.jpg');
  return (
    <article className="product d-flex">
      <a href={`/item/${id}`}>
        <div className="image" title={title}>
          <img className="rounded img-fluid" alt={title} src={pictureModified} />
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
          <div className="city col">
            <p className="p1">{city}</p>
          </div>
        </div>
        <a href={`/item/${id}`}>
          <div className="descrip__bottom" title={title}>
            <h4 className="p4">{title}</h4>
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
                        display: flex;
                        justify-content: center;
                        width: 180px;
                        height: 180px;
                        border-radius: 4px;
                    }
                    .image img {
                        max-height: 180px;
                    }
                    .descrip {
                        padding-left: 16px;
                    }
                    .shipping {
                        height: auto;
                        margin-left: 10px;
                    }
                    .descrip .city p {
                        justify-content: flex-end;
                        text-align: right;
                    }
                `}
      </style>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  picture: PropTypes.string,
  city: PropTypes.string,
  free_shipping: PropTypes.bool,
};

Product.defaultProps = {
  id: '',
  title: '',
  price: null,
  picture: '',
  city: '',
  free_shipping: false,
};

export default Product;
