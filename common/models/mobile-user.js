module.exports = function(MobileUser) {
	// Hide internal "position" relationship API endpoints
	MobileUser.disableRemoteMethod('__count__position', false);
	MobileUser.disableRemoteMethod('__create__position', false);
	MobileUser.disableRemoteMethod('__delete__position', false);
	MobileUser.disableRemoteMethod('__destroyById__position', false);
	MobileUser.disableRemoteMethod('__findById__position', false);
	MobileUser.disableRemoteMethod('__get__position', false);
	MobileUser.disableRemoteMethod('__updateById__position', false);	
	
	// Hide internal "weatherreport" relationship API endpoints
	MobileUser.disableRemoteMethod('__count__weatherreport', false);
	MobileUser.disableRemoteMethod('__create__weatherreport', false);
	MobileUser.disableRemoteMethod('__delete__weatherreport', false);
	MobileUser.disableRemoteMethod('__destroyById__weatherreport', false);
	MobileUser.disableRemoteMethod('__findById__weatherreport', false);
	MobileUser.disableRemoteMethod('__get__weatherreport', false);
	MobileUser.disableRemoteMethod('__updateById__weatherreport', false);	
	
	MobileUser.handleChangeError = function(err) {
		console.warn("Cannot update change records for MobileUser: ", err);	
	};
};
