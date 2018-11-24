module.exports = (sequelize, Sequelize) => {
	const Service = sequelize.define('band', {
	  name: {
		type: Sequelize.STRING
	  }
	},{timestamps: false});
	
	return Service;
}