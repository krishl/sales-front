import axios from 'axios';

export const fetchProducts = () => {
  return (dispatch) => {
    axios.get('http://127.0.0.1:8000/products/')
    .then((response) => {
      const products = response.data;
      dispatch({ type: 'PRODUCTS_FETCHED', products });
    })
    .catch((err) => {
      console.log(err);
    });
  };
};

export const addProduct = (product) => {
  return (dispatch) => {
    axios.post('http://127.0.0.1:8000/products/', product)
    .then((response) => {
      fetchProducts();
    })
    .catch((err) => {
      console.log(err);
    });
  };
};

export const deleteProduct = (product) => {
  return (dispatch) => {
    axios.delete(`http://127.0.0.1:8000/products/${product}`)
    .then(() => dispatch({ type: 'PRODUCT_DELETE', product }))
    .catch((err) => {
      console.log(err);
    });
  };
};