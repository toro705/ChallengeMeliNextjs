const formatNumber = (n, p, ts, dp) => {
    var t = [];
    // Get arguments, set defaults
    if (typeof p  == 'undefined') p  = 2;
    if (typeof ts == 'undefined') ts = '.';
    if (typeof dp == 'undefined') dp = ',';
  
    // Get number and decimal part of n
    n = Number(n).toFixed(p).split('.');
  
    // Add thousands separator and decimal point (if requied):
    for (var iLen = n[0].length, i = iLen? iLen % 3 || 3 : 0, j = 0; i <= iLen; i+=3) {
      t.push(n[0].substring(j, i));
      j = i;
    }
    // Insert separators and return result
    return t.join(ts);
}
const convertItemList = (item) => {
    let newItem = {
      id: item.id,
      title: item.title,
      price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: null,
      },
      picture: item.thumbnail,
      condition: item.condition,
      city: item.address.state_name,
      free_shipping: item.shipping.free_shipping,
  };
  return newItem
}
const convertItem = (item, description) => {
  let newItem =  {
        id: item.id,
        title: item.title,
        price: {      
          currency: item.currency_id,      
          amount: item.price,      
          decimals: null,    
        },    
        picture: item.secure_thumbnail,    
        condition: item.condition,   
        free_shipping: item.shipping.free_shipping || null,    
        sold_quantity: item.sold_quantity,
        description: description.plain_text, 
      }
    return newItem;
}
export {formatNumber, convertItemList, convertItem};