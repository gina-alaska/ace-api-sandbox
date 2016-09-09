module.exports = function(Weatherreport) {
	Weatherreport.handleChangeError = function(err) {
		console.warn("Cannot update change records for WeatherReport: ", err);
	};

	Weatherreport.withPositions = function(groupId, startDate, endDate, cb) {
		Weatherreport.find({
			include: [{
				relation: 'Position',
				scope: {
					where: {
						timestamp: {
							gte: new Date(startDate),
							lte: new Date(endDate)
						}
					}
				}
			},
			{
				relation: 'MobileUser',
				scope: {
					where: {
						groupId: groupId
					}
				}
			}]
		}, function(err, results) {
			if (err) return cb(err);
			var filteredResults = results.filter(function (result) {
				return result.Position() && result.MobileUser();
			});
			cb(null, filteredResults);
		});
	};

	Weatherreport.remoteMethod('withPositions', {
		http: {path: '/with-positions', verb: 'get'},
		accepts: [
			{arg: 'groupId', type: 'string', 'http': {source: 'query'}, required: true},
			{arg: 'startdate', type: 'string', 'http': {source: 'query'}, required: true},
			{arg: 'enddate', type: 'string', 'http': {source: 'query'}, required: true}
		],
		returns: {arg: 'WeatherReports', type: 'string'}
	});
};
