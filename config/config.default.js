'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1530695721282_2735';

  // add your config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    database: 'egg',
    host: '127.0.0.1',
    port: '3306',
    username: 'root',
    password: '',
  };

  config.security = {
    csrf: {
      useSession: false,
      // if useSession set to true, the secret will keep in session instead of cookie
      ignoreJSON: false,
      // skip check JSON requests if ignoreJSON set to true
      cookieName: 'csrfToken',
      // csrf token's cookie name
      sessionName: 'csrfToken',
      // csrf token's session name
      headerName: 'x-csrf-token',
      // request csrf token's name in header
      bodyName: '_csrf',
      // request csrf token's name in body
      queryName: '_csrf',
      // request csrf token's name in query
    },
  };

  return config;
};
