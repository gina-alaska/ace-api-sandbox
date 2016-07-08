var app = require('../../server/server');

module.exports = function(Group) {
	Group.handleChangeError = function(err) {
		console.warn('Cannot update change records for Group: ', err);
	};
	
	// Create a matching storage container with each new group instance
	Group.observe('before save', function(ctx, next) {
		if(ctx.isNewInstance)
		{
			var group = ctx.instance.toJSON();
			app.models.storage.createContainer({name: group.name}, function(err, container) {
			});
		}
		next();	
	});
};
