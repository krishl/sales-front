const initialState = {
    products: [{ id: 1, name: 'name', description: '2' }],
    status: ''
  };
  
  export default (state = initialState, action) => {
      switch (action.type) {
        case 'PRODUCTS_FETCHED':
          return {
            products: action.products,
            status: 'fetched'
          };
        case 'PRODUCT_DELETE':
          const products = state.products.filter(ele => ele.id !== action.product);
          return {
            ...state,
            products
          }
        default:
          return state;
      }
  };