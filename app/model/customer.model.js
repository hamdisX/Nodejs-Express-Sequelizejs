module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('artist', {
	  firstname: {
		type: Sequelize.STRING
	  },
	  lastname: {
		type: Sequelize.STRING
	  },
	  age: {
		  type: Sequelize.INTEGER
	  }
	},{timestamps: false});
	
	return Customer;
}