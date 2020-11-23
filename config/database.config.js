const Sequelize = require('sequelize');

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: 'null',
    database: process.env.DB_NAME,
    host: process.env.DB_ADDRESS,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    operatorsAliases: Sequelize.Op
  },
  test: {
    username: 'postgres',
    password: 'null',
    database: 'basic_node_pg_test',
    host: 'db',
    port: '5432',
    dialect: 'postgres',
    logging: false,
    operatorsAliases: Sequelize.Op
  },
  production: {
    username: 'postgres',
    password: 'null',
    database: 'basic_node_pg_production',
    host: 'db',
    port: '5432',
    dialect: 'postgres',
    operatorsAliases: Sequelize.Op
  },
  staging: {
    username: 'postgres',
    password: 'null',
    database: 'basic_node_pg_staging',
    host: 'db',
    port: '5432',
    dialect: 'postgres',
    operatorsAliases: Sequelize.Op
  }
};