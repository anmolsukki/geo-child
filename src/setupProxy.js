// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//   app.use(createProxyMiddleware('/auth/google', { target: 'http://3.15.224.93:5050' }));
//   app.use(createProxyMiddleware('/api/**', { target: 'http://3.15.224.93:5050' }));
// };

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/api/v1/customer/google-auth',
    createProxyMiddleware({
      target: 'http://3.15.224.93:5050',
      changeOrigin: true,
    })
  );
};
