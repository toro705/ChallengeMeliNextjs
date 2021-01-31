import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import BoxContainer from '../../components/boxContainer';
import BreadCrumb from '../../components/breadcrumb';
import { formatNumber, convertItem } from '../../utils/functions';

export async function getServerSideProps( context ) {
  const { id } = context.query;
  let urlItem = "https://api.mercadolibre.com/items/"+id;
  let urlDescription = urlItem + "/description";
  try {
    let item = await axios.get(urlItem)
    let description = await axios.get(urlDescription)
    item = convertItem(item.data, description.data)
    console.log('Item converted', item)
    return { props: { item: item } };
  } catch(err)  {
    console.log('[Axios Error]', err)
  };
};
export default function Item (props) {

        console.log('item.render()');
        const router = useRouter()
        console.log('[props] ', props)
        const {
             picture, title, price, condition, sold_quantity, description,
            // eslint-disable-next-line react/destructuring-assignment
            } = props.item;
        const pictureEdit = picture.replace('-I.jpg', '-O.jpg');
        const conditionEdit = condition === 'new' ? 'Nuevo' : condition;

        return (
          <div className="container">
            <BreadCrumb />
            <BoxContainer containerStyles="padding-32">
              <div className="row">
                <div className="col">
                  <img className="img-fluid mb-32" src={pictureEdit} alt="" />
                  <div className="description">

                    <p className="t3 mb-32">{title}</p>
                    <p className="p3 mb-32">{description}</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="productstatus mb-16"><p className="p2">{`${conditionEdit} - ${sold_quantity} vendidos`}</p></div>
                  <p className="title mb-32 t4">{title}</p>
                  <p className="price mb-32 t1">
                    $
                    {formatNumber(price.amount)}
                  </p>
                  <button type="button" className="btn btn-md btn-primary btn-block">Comprar</button>
                </div>
              </div>
            </BoxContainer>
          </div>
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
  author: {
    name: PropTypes.string,
    lastname: PropTypes.string,
  },
  item: {
    id: PropTypes.string,
    title:  PropTypes.string,
    price: {
        currency:  PropTypes.string,
        amount: PropTypes.string,
        decimals: PropTypes.string,
    },
    picture:  PropTypes.string,
    condition: PropTypes.string,
    free_shipping: true,
    sold_quantity: PropTypes.string,
    description: PropTypes.string,
}

};
Item.defaultProps = {
  staticContext: {
      query: [],
  },
  query: {},
  location: {},
  author: {
    name: 'Alan',
    lastname: 'Toro',
  },
  item: {
    id: '',
    title:  '',
    price: {
        currency:  '',
        amount: '',
        decimals: '',
    },
    picture:  '',
    condition: '',
    free_shipping: false,
    sold_quantity: '',
    description: '',
  }
};
