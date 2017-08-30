function Welcome() {

	console.log('welcome page instance');

	this.getWelcomeMsg = () => {
		return 'test';
	}
};

module.exports = Welcome;