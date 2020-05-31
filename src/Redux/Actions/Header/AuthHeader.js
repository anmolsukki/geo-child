export const getHeaders = (isAuth = false) => {
  if (isAuth) {
    return {
      'Content-Type': 'application/json',
      'Content-Security-Policy': 'block-all-mixed-content',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
  }
  return {
    'Content-Type': 'application/json',
  };
};
