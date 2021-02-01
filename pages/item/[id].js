/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import BoxContainer from '../../components/boxContainer';
import BreadCrumb from '../../components/breadcrumb';
import { getItem } from '../../utils/services';
import { formatNumber } from '../../utils/functions';
import ErrorHOC from '../../components/errorHOC';

export async function getServerSideProps(context) {
  const { id } = context.query;
  const fetch = await getItem(id);
  if (fetch === false) {
    return { props: { error: true } };
  }
  const { item, categoriesArray } = fetch;
  return { props: { item, categoriesArray } };
}
export default function Item(props) {
  const { item, categoriesArray } = props;
  const {
    picture,
    title,
    price,
    condition,
    sold_quantity,
    description,
    // eslint-disable-next-line react/destructuring-assignment
  } = item;
  const pictureEdit = picture.replace('-I.jpg', '-O.jpg');
  const conditionEdit = condition === 'new' ? 'Nuevo' : condition;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ErrorHOC {...props}>
      <div className="container">
        <BreadCrumb categories={categoriesArray} />
        <BoxContainer containerStyles="padding-32">
          <div className="row">
            <div className="col-12 col-md-4 order-first order-md-last">
              <div className="productstatus mb-16">
                <p className="p2">{`${conditionEdit} - ${sold_quantity} vendidos`}</p>
              </div>
              <p className="title mb-32 t4">{title}</p>
              <p className="price mb-32 t1">
                $
                {formatNumber(price.amount)}
              </p>
              <button type="button" className="btn btn-md btn-primary btn-block">
                Comprar
              </button>
            </div>
            <div className="col column-left">
              <img className="img-fluid mb-32" src={pictureEdit} alt="" />
              <div className="description">
                <p className="t3 mb-32">{title}</p>
                <p className="p3 mb-32">{description}</p>
              </div>
            </div>
          </div>
        </BoxContainer>
        <style jsx>
          {`
            .column-left {
              max-width: 680px;
            }
            button {
              margin-bottom: 35px;
            }
          `}
        </style>
      </div>
    </ErrorHOC>
  );
}

Item.propTypes = {
  staticContext: PropTypes.objectOf(PropTypes.array),
  query: PropTypes.objectOf(PropTypes.array),
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
  }),
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.shape({
      currency: PropTypes.string,
      amount: PropTypes.number,
      decimals: PropTypes.string,
    }),
    picture: PropTypes.string,
    condition: PropTypes.string,
    free_shipping: PropTypes.bool,
    sold_quantity: PropTypes.number,
    description: PropTypes.string,
  }),
  categoriesArray: PropTypes.arrayOf(PropTypes.object),
  author: PropTypes.shape({
    name: PropTypes.string,
    lastname: PropTypes.string,
  }),
};
Item.defaultProps = {
  staticContext: {
    query: [],
  },
  query: {},
  location: {},
  item: {
    id: '',
    title: '',
    price: {
      currency: '',
      amount: '',
      decimals: '',
    },
    picture: '',
    condition: '',
    free_shipping: false,
    sold_quantity: '',
    description: '',
  },
  categoriesArray: [],
  author: {
    name: 'Alan',
    lastname: 'Toro',
  },
};
