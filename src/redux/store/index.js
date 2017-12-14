import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import auth from '../modules/auth/reducers';
import customers from '../modules/customers/reducers';
import products from '../modules/products/reducers';

const reducers = combineReducers({
  auth,
  products,
  customers,
});

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION(),
  applyMiddleware(...middleware),
);