// TODO(bajtos) Move the bi-di replication to loopback core,
// add model settings to enable the replication.
// Example:
//  LocalTodo: { options: {
//    base: 'Todo',
//    replicate: {
//      target: 'Todo',
//      mode: 'push' | 'pull' | 'bidi'
//    }}}
var proquint = require('proquint');

module.exports = function(client) {
  var LocalGroup = client.models.LocalGroup;
  var RemoteGroup = client.models.RemoteGroup;
  var LocalMobileUser = client.models.LocalMobileUser;
  var RemoteMobileUser = client.models.RemoteMobileUser;
  var LocalPosition = client.models.LocalPosition;
  var RemotePosition = client.models.RemotePosition;
  var LocalWeatherReport = client.models.LocalWeatherReport;
  var RemoteWeatherReport = client.models.RemoteWeatherReport;
  var LocalSettings = client.models.LocalSettings;
  var RemoteSettings = client.models.RemoteSettings;
    

  client.network = {
    _isConnected: true,
    get isConnected() {
      console.log('isConnected?', this._isConnected);
      return this._isConnected;
    },
    set isConnected(value) {
      this._isConnected = value;
    }
  };

  // setup model replication
  var since = { push: -1, pull: -1 };
  function sync(cb) {
    
    // Get the current group id
    var groupId = window.localStorage.getItem("currentUser", {}).groupId;
    
    // Get array of user ids for users in the group
    var groupIdArray = window.localStorage.getItem("groupUserIds", []);
    
    // PersistedModel.replicate = function(since, targetModel, options, callback)
    
    console.log("sync starting");
    
    LocalGroup.replicate(
      since.push,
      RemoteGroup,
      {filter: {where: {id: groupId}}},
      function pushed(err, conflicts, cps) {
        since.push = cps;
        console.log("LocalGroup pushed");
        RemoteGroup.replicate(
          since.pull,
          LocalGroup,
          {filter: {where: {id: groupId}}},
          function pulled(err, conflicts, cps) {
            since.pull = cps;
            console.log("LocalGroup pulled");
            cb && cb.call(this, "group");
          });
      });
      
     LocalMobileUser.replicate(
      since.push,
      RemoteMobileUser,
      {filter: {where: {groupId: groupId}, fields: {password: false}}},
      function pushed(err, conflicts, cps) {
        since.push = cps;
        console.log("LocalMobileUser pushed");
        RemoteMobileUser.replicate(
          since.pull,
          LocalMobileUser,
          {filter: {where: {groupId: groupId}, fields: {password: false}}},
          function pulled(err, conflicts, cps) {
            since.pull = cps;
            // Submit request to execute callbacks before firing off conflict resolutions
            console.log("LocalMobileUser pulled");
            cb && cb.call(this, "mobileuser");
            
            if(conflicts)
            {
              for(var i = 0; i < conflicts.length; i++)
              {
                conflicts[i].resolve();
              }
            }            
        });
        if(conflicts)
        {
          for(var i = 0; i < conflicts.length; i++)
          {
            conflicts[i].resolve();
          }
        }        
      });
      
      LocalPosition.replicate(
      since.push,
      RemotePosition,
      {filter: {where: {userId: {inq: groupIdArray}}}},
      function pushed(err, conflicts, cps) {
        since.push = cps;
        console.log("LocalPosition pushed");
        RemotePosition.replicate(
          since.pull,
          LocalPosition,
          {filter: {where: {userId: {inq: groupIdArray}}}},
          function pulled(err, conflicts, cps) {
            since.pull = cps;
            console.log("LocalPosition pulled");
            cb && cb.call(this, "position");
            if(conflicts)
            {
              for(var i = 0; i < conflicts.length; i++)
              {
                conflicts[i].resolve();
              }
            }                
        });
        if(conflicts)
        {
          for(var i = 0; i < conflicts.length; i++)
          {
            conflicts[i].resolve();
          }
        }            
      });
      
      LocalWeatherReport.replicate(
      since.push,
      RemoteWeatherReport,
      {filter: {where: {userId: {inq: groupIdArray}}}},
      function pushed(err, conflicts, cps) {
        since.push = cps;
        console.log("LocalWeatherReport pushed");
        RemoteWeatherReport.replicate(
          since.pull,
          LocalWeatherReport,
          {filter: {where: {userId: {inq: groupIdArray}}}},
          function pulled(err, conflicts, cps) {
            since.pull = cps;
            console.log("LocalWeatherReport pulled");
            cb && cb.call(this, "report");
            if(conflicts)
            {
              for(var i = 0; i < conflicts.length; i++)
              {
                conflicts[i].resolve();
              }
            }            
        });
        if(conflicts)
        {
          for(var i = 0; i < conflicts.length; i++)
          {
            conflicts[i].resolve();
          }
        }       
      });
      
      /*LocalSettings.replicate(
      since.push,
      RemoteSettings,
      {},
      function pushed(err, conflicts, cps) {
        since.push = cps;
        RemoteSettings.replicate(
          since.pull,
          LocalSettings,
          {},
          function pulled(err, conflicts, cps) {
            since.pull = cps;
            cb && cb.call(this, "settings");
            if(conflicts)
            {
              for(var i = 0; i < conflicts.length; i++)
              {
                conflicts[i].resolve();
              }
            }            
        });
        if(conflicts)
        {
          for(var i = 0; i < conflicts.length; i++)
          {
            conflicts[i].resolve();
          }
        }
        
      });*/
  }

  // sync local changes if connected
  LocalGroup.on('after save', function(ctx, next) {
      next();
      sync();
  });
  LocalGroup.on('after delete', function(ctx, next) {
      next();
      sync();
  });

  LocalMobileUser.on('after save', function(ctx, next) {
      next();
      sync();
  });
  
  LocalMobileUser.on('after delete', function(ctx, next) {
      next();
      sync();
  });

  LocalPosition.on('after save', function(ctx, next) {
      next();
      sync();
  });
  LocalPosition.on('after delete', function(ctx, next) {
      next();
      sync();
  });

  LocalWeatherReport.on('after save', function(ctx, next) {
      next();
      sync();
  });
  LocalWeatherReport.on('after delete', function(ctx, next) {
    next();
    sync();
  });

  client.sync = sync;

  client.getReadableModelId = function(modelId) {
    return proquint.encode(new Buffer(modelId.substring(0, 8), 'binary'));
  };
};