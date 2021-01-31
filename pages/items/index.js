import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import BoxContainer from '../../components/boxContainer';
import BreadCrumb from '../../components/breadcrumb';
import ProductList from '../../components/prductList';
import { convertItemList } from '../../utils/functions';

/* import { listQuery } from '../../utils/mocks'; */

function List (props) {
    console.log('[props]', props)
    // funcion estatica que se ejecuta en el pre-fetch
    const router = useRouter();
    console.log('list.render()');
    return (
        <div className="container">
            <BreadCrumb />
            <BoxContainer>
                <ProductList items={props.items ? props.items : null} />
            </BoxContainer>
        </div>
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
  };
List.defaultProps = {
    staticContext: {
        query: [],
    },
    query: {},
    location: {},
};

export async function getServerSideProps( context ) {
    const { search } = context.query;
    console.log
    const fetch =  await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=4`);
    let newItemsArray = [];
    const { results } = fetch.data;
    results.map((o, i) => {
        console.log('inside map');
        let newItem = convertItemList(o);
        console.log('[new item]', newItem)
        newItemsArray.push(newItem);
    });
    return { props: { items: newItemsArray } }
}
export default List;