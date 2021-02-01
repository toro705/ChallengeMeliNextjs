import axios from 'axios';
import { convertItem, convertItemList } from './functions';

const getItemList = async (search) => {
  try {
    const fetch = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=4`,
    );
    const newItemsArray = [];
    const { results, filters } = fetch.data;
    let categoriesArray = [];
    if (filters.length > 0) {
      categoriesArray = filters[0].values[0].path_from_root;
    }
    results.map((o) => {
      const newItem = convertItemList(o);
      newItemsArray.push(newItem);
      return true;
    });
    const response = {
      items: newItemsArray,
      categories: categoriesArray,
    };
    return response;
  } catch (err) {
    return false;
  }
};
const getItem = async (id) => {
  const urlItem = `https://api.mercadolibre.com/items/${id}`;
  const urlDescription = `${urlItem}/description`;
  try {
    let item = await axios.get(urlItem);
    const urlcategories = `https://api.mercadolibre.com/categories/${item.data.category_id}`;
    const categories = await axios.get(urlcategories);
    const categoriesArray = categories.data.path_from_root;
    const description = await axios.get(urlDescription);
    item = convertItem(item.data, description.data);
    const response = { item, categoriesArray };
    return response;
  } catch (err) {
    return false;
  }
};
export { getItemList, getItem };
