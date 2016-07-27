module.exports = function(Weatherreport) {
	Weatherreport.handleChangeError = function(err) {
		console.warn("Cannot update change records for WeatherReport: ", err);
	};

	Weatherreport.withPositions = function(cb) {
		Weatherreport.find({
			include: {
				relation: 'Position'
			}
		}, function(err, results) {
			if (err) return cb(err);
			cb(null, results);
		});
	};

	Weatherreport.remoteMethod('withPositions', {
		http: {path: '/with-positions', verb: 'get'},
		returns: {arg: 'WeatherReports', type: 'string'}
	});
};
