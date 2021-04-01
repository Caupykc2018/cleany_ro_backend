const {models} = require('./src/models');

module.exports = {
  type: 'postgres',
  url: process.env.DB_URL ||
    'postgres://admin:qwerty789@localhost:5432/cleany_ro_db',
  ssl: process.env.NODE_ENV === 'PRODUCTION',
  extra: {
    ssl: process.env.NODE_ENV === 'PRODUCTION' ? {
      rejectUnauthorized: false,
    } : false,
  },
  synchronize: true,
  entities: models,
};
