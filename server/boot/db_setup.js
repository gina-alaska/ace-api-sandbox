module.exports = function(app) {
	var Role = app.models.Role;
	var RoleMapping = app.models.RoleMapping;

	app.models.mobile_user.create([{username: 'admin', password: 'password', email: 'test@test.com', apikey: ''}], function(err, user) {
		console.log('Created user:', user[0].username);
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

		Role.create({
			name: 'admin'
		}, function(err, role) {
			if (err) throw err;
			console.log('Created role:', role);
			role.principals.create({
				principalType: RoleMapping.USER,
				principalId: user[0].id
			}, function(err, principal) {
				if (err) throw err;
				console.log('Created principal:', principal);
			});
		});
	});
};
