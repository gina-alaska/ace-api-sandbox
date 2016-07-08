module.exports = function(app) {
	app.models.group.create([{name: 'TestUsers'}], function(err, group) {
		app.models.mobile_user.create([{username: 'testuser', password: 'password', email: 'test@test.com', groupId: group[0].id}], function(err, user) {
			app.models.position.create([{
				userId: user[0].id,
				timestamp: '2016-06-08T20:19:04.151Z',
				'latlng': {
					'lat': 64.8592668,
					'lng': -147.8511062
				}
			}], function(err, position) {
				app.models.weatherreport.create([{
					userId: user[0].id,
					positionId: position[0].id,
					cloudCover: '1/8th',
					precipitation: 'Light Rain',
					visibility: 'Mist',
					temperatureValue: '59',
					temperatureUnits: ' ºF '
				}]);
			});
		});
	});
};