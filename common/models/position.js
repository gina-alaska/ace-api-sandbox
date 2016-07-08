module.exports = function(Position) {
	Position.handleChangeError = function(err) {
		console.warn("Cannot update change records for Position: ", err);
	};
};
