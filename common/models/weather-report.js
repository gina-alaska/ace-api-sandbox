module.exports = function(Weatherreport) {
	Weatherreport.handleChangeError = function(err) {
		console.warn("Cannot update change records for WeatherReport: ", err);
	};

	Weatherreport.withPositions = function(userId, date, cb) {
		Weatherreport.find({
			include: {
				relation: 'Position',
				scope: {
					where: {
						timestamp: {
							gte: new Date(date)
						}
					}
				}
			},
			where: {
				userId: userId
			}
		}, function(err, results) {
			if (err) return cb(err);
			var filteredResults = results.filter(function (result) {
				return result.Position();
			});
			cb(null, filteredResults);
		});
	};

	Weatherreport.remoteMethod('withPositions', {
		http: {path: '/with-positions', verb: 'get'},
		accepts: [
			{arg: 'userId', type: 'string', 'http': {source: 'query'}, required: true},
			{arg: 'date', type: 'string', 'http': {source: 'query'}, required: true}
		],
		returns: {arg: 'WeatherReports', type: 'string'}
	});
};
