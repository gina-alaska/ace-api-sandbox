var enclose = function() {(
	
	Memory.prototype.windowLocationFix = function() {
		if(!opts.uri && !opts.uri.protocol)
		{
			opts.protocol = opts.protocol || window.location.protocol
		}
		else
		{
			opts.protocol = opts.uri.protocol;
		}
	};
	
	Memory.prototype.authorizationHeaderAddition = function() {
		opts.headers["authorization"] = window.localStorage.getItem("access_token", "");
	}
	
	Memory.prototype.filterUnknownPropertiesFix = function() {
		this.__unknownProperties = {};
		
		this.__unknownProperties[p] = data[p];
	}
	
	Memory.prototype.collection = function() {
		// Fill in empty model if undefined
		if(this.cache[model] === undefined)
		{
		  this.cache[model] = {};
		}  
		
		return this.cache[model];
	}
	
	
	Memory.prototype.loadFromFile = function(callback) {
	  	var self = this;
		var hasLocalStorage = typeof window !== 'undefined' && window.localStorage;
		var localStorage = hasLocalStorage && this.settings.localStorage;
		
		if (self.settings.file) {
			fs.readFile(self.settings.file, {encoding: 'utf8', flag: 'r'}, function (err, data) {
			if (err && err.code !== 'ENOENT') {
				callback && callback(err);
			} else {
				parseAndLoad(data);
			}
			});
		} else if(localStorage) {
			var data = window.localStorage.getItem(localStorage);
			data = data || '{}';
			parseAndLoad(data);			
			/*if(window.saveWorkerPort)
			{
				window.saveWorkerPort.postMessage({req: "load"});
				window.saveWorkerPort.onmessage = function(message) {
					self.ids = message.data.ids || {};
					self.cache = message.data.cache || {};
					callback && callback();
				};
			} */   
		} else {
			process.nextTick(callback);
		}
		
		function parseAndLoad(data) {
			if (data) {
			/*try {
				data = JSON.parse(data.toString());
			} catch(e) {
				return callback(e);
			}*/
		
			self.ids = data.ids || {};
			self.cache = data.models || {};
			} else {
			if(!self.cache) {
				self.ids = {};
				self.cache = {};
			}
			}
			callback && callback();
		}
		};
	
	/*!
	 * Flush the cache into the json file if necessary
	 * @param {Function} callback
	 */
	Memory.prototype.saveToFile = function (result, callback) {
		var self = this;
		var file = this.settings.file;
		var hasLocalStorage = typeof window !== 'undefined' && window.localStorage;
		var localStorage = hasLocalStorage && this.settings.localStorage;
		if (file) {
			if(!self.writeQueue) {
			// Create a queue for writes
			self.writeQueue = async.queue(function (task, cb) {
				// Flush out the models/ids
				var data = JSON.stringify({
				ids: self.ids,
				models: self.cache
				}, null, '  ');
		
				fs.writeFile(self.settings.file, data, function (err) {
				cb(err);
				task.callback && task.callback(err, task.data);
				});
			}, 1);
			}
			// Enqueue the write
			self.writeQueue.push({
			data: result,
			callback: callback
			});
		} else if (localStorage) {
			// Flush out the models/ids
			/*var data = JSON.stringify({
			ids: self.ids,
			models: self.cache
			}, null, '  ');*/
			
			// Pass to saveWorker thread
			var msg = {
				req: "save",
				data: {
					ids: self.ids,
					models: self.cache
				}
			};
			window.saveWorkerPort.postMessage(msg);
			
			//window.localStorage.setItem(localStorage, data);
			process.nextTick(function () {
			callback && callback(null, result);
			});
		} else {
			process.nextTick(function () {
			callback && callback(null, result);
			});
		}
	};
	
	Memory.prototype.updateAll = function() {
		// Check for equality before updating
        if(!current || !(_.isEqual(JSON.stringify(current.__data), JSON.stringify(update.data))))
        {
            switch (update.type) {
            case Change.UPDATE:
                tasks.push(function(cb) {
                applyUpdate(Model, id, current, update.data, update.change, conflicts, cb);
                });
                break;
    
            case Change.CREATE:
                tasks.push(function(cb) {
                applyCreate(Model, id, current, update.data, update.change, conflicts, cb);
                });
                break;
            case Change.DELETE:
                tasks.push(function(cb) {
                applyDelete(Model, id, current, update.change, conflicts, cb);
                });
                break;
            }
        }
	};
)};
