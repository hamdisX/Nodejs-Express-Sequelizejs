const env = {
  database: 'crud',
  username: 'postgres',
  password: '7FMd9yH9n7',
  host: 'localhost',
  dialect: 'postgres',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;