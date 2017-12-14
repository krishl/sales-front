import axios from 'axios';

export const fetchCustomers = () => {
  return (dispatch) => {
    axios.get('http://127.0.0.1:8000/customers/')
    .then((response) => {
      const customers = response.data;
      dispatch({ type: 'CUSTOMERS_FETCHED', customers });
    })
    .catch((err) => {
      console.log(err);
    });
  };
};

export const addCustomer = (customer) => {
  return (dispatch) => {
    axios.post('http://127.0.0.1:8000/customers/', customer)
    .then((response) => {
      fetchCustomers();
    })
    .catch((err) => {
      console.log(err);
    });
  };
};

export const deleteCustomer = (customer) => {
  return (dispatch) => {
    axios.delete(`http://127.0.0.1:8000/customers/${customer}`)
    .then(() => dispatch({ type: 'CUSTOMER_DELETE', customer }))
    .catch((err) => {
      console.log(err);
    });
  };
};