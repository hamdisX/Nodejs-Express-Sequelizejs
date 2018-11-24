const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.customers = require('../model/customer.model')(sequelize, Sequelize);
db.services= require('../model/service.model')(sequelize, Sequelize);

//db.customers.belongsTo(db.services)
db.services.hasOne(db.customers, { as: "lead" })



module.exports = db;