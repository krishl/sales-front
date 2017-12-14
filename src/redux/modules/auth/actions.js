export const login = (data) => {
  return dispatch => dispatch({
    type: 'AUTHENTICATION_SUCCESS',
    submittedPassword: data.submittedPassword,
    submittedEmail: data.submittedEmail
  });
};
