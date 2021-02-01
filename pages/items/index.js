import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import BoxContainer from '../../components/boxContainer';
import BreadCrumb from '../../components/breadcrumb';
import ProductList from '../../components/prductList';
import ErrorHOC from '../../components/errorHOC';
import { getItemList } from '../../utils/services';

export async function getServerSideProps(context) {
  const { search } = context.query;
  const fetch = await getItemList(search);
  if (fetch === false) {
    return { props: { itemserror: true } };
  }
  const { items, categories } = fetch;
  return { props: { items, categories, search } };
}
export default function List(props) {
  const { items, search, categories } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ErrorHOC {...props}>
      <div className="container">
        <Head>
          <title>{`${search} | Mercado Libre Argentina`}</title>
          <meta name="description" content={`Encontrá ${search} en MercadoLibre.com.ar! Entrá y conocé nuestras increíbles ofertas y promociones. Descubrí la mejor forma de comprar online.`} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${search} | Mercado Libre Argentina`} />
          <meta property="og:description" content={`Encontrá ${search} en MercadoLibre.com.ar! Entrá y conocé nuestras increíbles ofertas y promociones. Descubrí la mejor forma de comprar online.`} />
        </Head>
        <BreadCrumb categories={categories} />
        <BoxContainer>
          <ProductList items={items || null} />
        </BoxContainer>
      </div>
    </ErrorHOC>
  );
}

List.propTypes = {
  staticContext: PropTypes.objectOf(PropTypes.array),
  query: PropTypes.objectOf(PropTypes.array),
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
  }),
  author: PropTypes.shape({
    name: PropTypes.string,
    lastname: PropTypes.string,
  }),
  items: PropTypes.arrayOf(PropTypes.object),
  categories: PropTypes.arrayOf(PropTypes.object),
  search: PropTypes.string,
};
List.defaultProps = {
  staticContext: {
    query: [],
  },
  query: {},
  location: {},
  items: [],
  categories: [],
  search: '',
  author: {
    name: 'Alan',
    lastname: 'Toro',
  },
};
