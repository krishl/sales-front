const initialState = {
  customers: [{ id: 1, first_name: 'name', last_inital: '2' }],
  status: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
      case 'CUSTOMERS_FETCHED':
        return {
          customers: action.customers,
          status: 'fetched'
        };
      case 'CUSTOMER_DELETE':
        const customers = state.customers.filter(ele => ele.id !== action.customer);
        return {
          ...state,
          customers
        }
      default:
        return state;
    }
};