const initialState = {
  isAuthenticated: false,
  willAuthenticate: true,
  currentCustomer: null
};

export default (state = initialState, action) => {
	switch (action.type){
		case 'AUTHENTICATION_REQUEST':
      return {
        ...state,
       willAuthenticate: true
			};
		case 'AUTHENTICATION_SUCCESS':
      return {
        isAuthenticated: true,
        willAuthenticate: false,
        currentCustomer: {
          password: action.submittedPassword,
          email: action.submittedEmail
        },
      };
		case 'AUTHENTICATION_FAIL':
      return Object.assign({}, initialState, { willAuthenticate: false });

    case 'LOGOUT':
      return Object.assign({}, initialState, { willAuthenticate: false });
		default:
      return state;
	}
};
