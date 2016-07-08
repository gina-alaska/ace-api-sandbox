(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Weatherreport
 * @header lbServices.Weatherreport
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Weatherreport` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Weatherreport",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/WeatherReports/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Weatherreport.Position() instead.
        "prototype$__get__Position": {
          url: urlBase + "/WeatherReports/:id/Position",
          method: "GET"
        },

        // INTERNAL. Use Weatherreport.MobileUser() instead.
        "prototype$__get__MobileUser": {
          url: urlBase + "/WeatherReports/:id/MobileUser",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Weatherreport#create
         * @methodOf lbServices.Weatherreport
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Weatherreport` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/WeatherReports",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Weatherreport#createMany
         * @methodOf lbServices.Weatherreport
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Weatherreport` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/WeatherReports",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Weatherreport#upsert
         * @methodOf lbServices.Weatherreport
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Weatherreport` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/WeatherReports",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Weatherreport#exists
         * @methodOf lbServices.Weatherreport
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/WeatherReports/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Weatherreport#findById
         * @methodOf lbServices.Weatherreport
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Weatherreport` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/WeatherReports/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Weatherreport#find
         * @methodOf lbServices.Weatherreport
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Weatherreport` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/WeatherReports",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Weatherreport#findOne
         * @methodOf lbServices.Weatherreport
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Weatherreport` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/WeatherReports/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Weatherreport#updateAll
         * @methodOf lbServices.Weatherreport
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/WeatherReports/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Weatherreport#deleteById
         * @methodOf lbServices.Weatherreport
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/WeatherReports/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Weatherreport#count
         * @methodOf lbServices.Weatherreport
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/WeatherReports/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Weatherreport#prototype$updateAttributes
         * @methodOf lbServices.Weatherreport
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Weatherreport` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/WeatherReports/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Weatherreport#createChangeStream
         * @methodOf lbServices.Weatherreport
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/WeatherReports/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Mobile_user.WeatherReports.findById() instead.
        "::findById::mobile_user::WeatherReports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MobileUsers/:id/WeatherReports/:fk",
          method: "GET"
        },

        // INTERNAL. Use Mobile_user.WeatherReports.destroyById() instead.
        "::destroyById::mobile_user::WeatherReports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MobileUsers/:id/WeatherReports/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Mobile_user.WeatherReports.updateById() instead.
        "::updateById::mobile_user::WeatherReports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MobileUsers/:id/WeatherReports/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Mobile_user.WeatherReports() instead.
        "::get::mobile_user::WeatherReports": {
          isArray: true,
          url: urlBase + "/MobileUsers/:id/WeatherReports",
          method: "GET"
        },

        // INTERNAL. Use Mobile_user.WeatherReports.create() instead.
        "::create::mobile_user::WeatherReports": {
          url: urlBase + "/MobileUsers/:id/WeatherReports",
          method: "POST"
        },

        // INTERNAL. Use Mobile_user.WeatherReports.createMany() instead.
        "::createMany::mobile_user::WeatherReports": {
          isArray: true,
          url: urlBase + "/MobileUsers/:id/WeatherReports",
          method: "POST"
        },

        // INTERNAL. Use Mobile_user.WeatherReports.destroyAll() instead.
        "::delete::mobile_user::WeatherReports": {
          url: urlBase + "/MobileUsers/:id/WeatherReports",
          method: "DELETE"
        },

        // INTERNAL. Use Mobile_user.WeatherReports.count() instead.
        "::count::mobile_user::WeatherReports": {
          url: urlBase + "/MobileUsers/:id/WeatherReports/count",
          method: "GET"
        },

        // INTERNAL. Use Group.WeatherReports.findById() instead.
        "::findById::group::WeatherReports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/WeatherReports/:fk",
          method: "GET"
        },

        // INTERNAL. Use Group.WeatherReports.destroyById() instead.
        "::destroyById::group::WeatherReports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/WeatherReports/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.WeatherReports.updateById() instead.
        "::updateById::group::WeatherReports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/WeatherReports/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.WeatherReports.link() instead.
        "::link::group::WeatherReports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/WeatherReports/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.WeatherReports.unlink() instead.
        "::unlink::group::WeatherReports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/WeatherReports/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.WeatherReports.exists() instead.
        "::exists::group::WeatherReports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/WeatherReports/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Group.WeatherReports() instead.
        "::get::group::WeatherReports": {
          isArray: true,
          url: urlBase + "/Groups/:id/WeatherReports",
          method: "GET"
        },

        // INTERNAL. Use Group.WeatherReports.create() instead.
        "::create::group::WeatherReports": {
          url: urlBase + "/Groups/:id/WeatherReports",
          method: "POST"
        },

        // INTERNAL. Use Group.WeatherReports.createMany() instead.
        "::createMany::group::WeatherReports": {
          isArray: true,
          url: urlBase + "/Groups/:id/WeatherReports",
          method: "POST"
        },

        // INTERNAL. Use Group.WeatherReports.destroyAll() instead.
        "::delete::group::WeatherReports": {
          url: urlBase + "/Groups/:id/WeatherReports",
          method: "DELETE"
        },

        // INTERNAL. Use Group.WeatherReports.count() instead.
        "::count::group::WeatherReports": {
          url: urlBase + "/Groups/:id/WeatherReports/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Weatherreport#updateOrCreate
         * @methodOf lbServices.Weatherreport
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Weatherreport` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Weatherreport#update
         * @methodOf lbServices.Weatherreport
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Weatherreport#destroyById
         * @methodOf lbServices.Weatherreport
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Weatherreport#removeById
         * @methodOf lbServices.Weatherreport
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Weatherreport#modelName
    * @propertyOf lbServices.Weatherreport
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Weatherreport`.
    */
    R.modelName = "Weatherreport";


        /**
         * @ngdoc method
         * @name lbServices.Weatherreport#Position
         * @methodOf lbServices.Weatherreport
         *
         * @description
         *
         * Fetches belongsTo relation Position.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Position` object.)
         * </em>
         */
        R.Position = function() {
          var TargetResource = $injector.get("Position");
          var action = TargetResource["::get::weatherreport::Position"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Weatherreport#MobileUser
         * @methodOf lbServices.Weatherreport
         *
         * @description
         *
         * Fetches belongsTo relation MobileUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Mobile_user` object.)
         * </em>
         */
        R.MobileUser = function() {
          var TargetResource = $injector.get("Mobile_user");
          var action = TargetResource["::get::weatherreport::MobileUser"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Position
 * @header lbServices.Position
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Position` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Position",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Positions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Position.MobileUser() instead.
        "prototype$__get__MobileUser": {
          url: urlBase + "/Positions/:id/MobileUser",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Position#create
         * @methodOf lbServices.Position
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Position` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Positions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Position#createMany
         * @methodOf lbServices.Position
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Position` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Positions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Position#upsert
         * @methodOf lbServices.Position
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Position` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Positions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Position#exists
         * @methodOf lbServices.Position
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Positions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Position#findById
         * @methodOf lbServices.Position
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Position` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Positions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Position#find
         * @methodOf lbServices.Position
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Position` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Positions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Position#findOne
         * @methodOf lbServices.Position
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Position` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Positions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Position#updateAll
         * @methodOf lbServices.Position
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Positions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Position#deleteById
         * @methodOf lbServices.Position
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Positions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Position#count
         * @methodOf lbServices.Position
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Positions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Position#prototype$updateAttributes
         * @methodOf lbServices.Position
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Position` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Positions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Position#createChangeStream
         * @methodOf lbServices.Position
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Positions/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Weatherreport.Position() instead.
        "::get::weatherreport::Position": {
          url: urlBase + "/WeatherReports/:id/Position",
          method: "GET"
        },

        // INTERNAL. Use Mobile_user.Positions.findById() instead.
        "::findById::mobile_user::Positions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MobileUsers/:id/Positions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Mobile_user.Positions.destroyById() instead.
        "::destroyById::mobile_user::Positions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MobileUsers/:id/Positions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Mobile_user.Positions.updateById() instead.
        "::updateById::mobile_user::Positions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MobileUsers/:id/Positions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Mobile_user.Positions() instead.
        "::get::mobile_user::Positions": {
          isArray: true,
          url: urlBase + "/MobileUsers/:id/Positions",
          method: "GET"
        },

        // INTERNAL. Use Mobile_user.Positions.create() instead.
        "::create::mobile_user::Positions": {
          url: urlBase + "/MobileUsers/:id/Positions",
          method: "POST"
        },

        // INTERNAL. Use Mobile_user.Positions.createMany() instead.
        "::createMany::mobile_user::Positions": {
          isArray: true,
          url: urlBase + "/MobileUsers/:id/Positions",
          method: "POST"
        },

        // INTERNAL. Use Mobile_user.Positions.destroyAll() instead.
        "::delete::mobile_user::Positions": {
          url: urlBase + "/MobileUsers/:id/Positions",
          method: "DELETE"
        },

        // INTERNAL. Use Mobile_user.Positions.count() instead.
        "::count::mobile_user::Positions": {
          url: urlBase + "/MobileUsers/:id/Positions/count",
          method: "GET"
        },

        // INTERNAL. Use Group.Positions.findById() instead.
        "::findById::group::Positions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/Positions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Group.Positions.destroyById() instead.
        "::destroyById::group::Positions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/Positions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.Positions.updateById() instead.
        "::updateById::group::Positions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/Positions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.Positions.link() instead.
        "::link::group::Positions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/Positions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.Positions.unlink() instead.
        "::unlink::group::Positions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/Positions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.Positions.exists() instead.
        "::exists::group::Positions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/Positions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Group.Positions() instead.
        "::get::group::Positions": {
          isArray: true,
          url: urlBase + "/Groups/:id/Positions",
          method: "GET"
        },

        // INTERNAL. Use Group.Positions.create() instead.
        "::create::group::Positions": {
          url: urlBase + "/Groups/:id/Positions",
          method: "POST"
        },

        // INTERNAL. Use Group.Positions.createMany() instead.
        "::createMany::group::Positions": {
          isArray: true,
          url: urlBase + "/Groups/:id/Positions",
          method: "POST"
        },

        // INTERNAL. Use Group.Positions.destroyAll() instead.
        "::delete::group::Positions": {
          url: urlBase + "/Groups/:id/Positions",
          method: "DELETE"
        },

        // INTERNAL. Use Group.Positions.count() instead.
        "::count::group::Positions": {
          url: urlBase + "/Groups/:id/Positions/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Position#updateOrCreate
         * @methodOf lbServices.Position
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Position` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Position#update
         * @methodOf lbServices.Position
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Position#destroyById
         * @methodOf lbServices.Position
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Position#removeById
         * @methodOf lbServices.Position
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Position#modelName
    * @propertyOf lbServices.Position
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Position`.
    */
    R.modelName = "Position";


        /**
         * @ngdoc method
         * @name lbServices.Position#MobileUser
         * @methodOf lbServices.Position
         *
         * @description
         *
         * Fetches belongsTo relation MobileUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Mobile_user` object.)
         * </em>
         */
        R.MobileUser = function() {
          var TargetResource = $injector.get("Mobile_user");
          var action = TargetResource["::get::position::MobileUser"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Mobile_user
 * @header lbServices.Mobile_user
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Mobile_user` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Mobile_user",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/MobileUsers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#prototype$__findById__accessTokens
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Mobile_user` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MobileUsers/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MobileUsers/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#prototype$__updateById__accessTokens
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Mobile_user` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MobileUsers/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Mobile_user.WeatherReports.findById() instead.
        "prototype$__findById__WeatherReports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MobileUsers/:id/WeatherReports/:fk",
          method: "GET"
        },

        // INTERNAL. Use Mobile_user.WeatherReports.destroyById() instead.
        "prototype$__destroyById__WeatherReports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MobileUsers/:id/WeatherReports/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Mobile_user.WeatherReports.updateById() instead.
        "prototype$__updateById__WeatherReports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MobileUsers/:id/WeatherReports/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Mobile_user.Positions.findById() instead.
        "prototype$__findById__Positions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MobileUsers/:id/Positions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Mobile_user.Positions.destroyById() instead.
        "prototype$__destroyById__Positions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MobileUsers/:id/Positions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Mobile_user.Positions.updateById() instead.
        "prototype$__updateById__Positions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/MobileUsers/:id/Positions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Mobile_user.Group() instead.
        "prototype$__get__Group": {
          url: urlBase + "/MobileUsers/:id/Group",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#prototype$__get__accessTokens
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Queries accessTokens of mobile_user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Mobile_user` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/MobileUsers/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#prototype$__create__accessTokens
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Mobile_user` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/MobileUsers/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#prototype$__delete__accessTokens
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/MobileUsers/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#prototype$__count__accessTokens
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Counts accessTokens of mobile_user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/MobileUsers/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Mobile_user.WeatherReports() instead.
        "prototype$__get__WeatherReports": {
          isArray: true,
          url: urlBase + "/MobileUsers/:id/WeatherReports",
          method: "GET"
        },

        // INTERNAL. Use Mobile_user.WeatherReports.create() instead.
        "prototype$__create__WeatherReports": {
          url: urlBase + "/MobileUsers/:id/WeatherReports",
          method: "POST"
        },

        // INTERNAL. Use Mobile_user.WeatherReports.destroyAll() instead.
        "prototype$__delete__WeatherReports": {
          url: urlBase + "/MobileUsers/:id/WeatherReports",
          method: "DELETE"
        },

        // INTERNAL. Use Mobile_user.WeatherReports.count() instead.
        "prototype$__count__WeatherReports": {
          url: urlBase + "/MobileUsers/:id/WeatherReports/count",
          method: "GET"
        },

        // INTERNAL. Use Mobile_user.Positions() instead.
        "prototype$__get__Positions": {
          isArray: true,
          url: urlBase + "/MobileUsers/:id/Positions",
          method: "GET"
        },

        // INTERNAL. Use Mobile_user.Positions.create() instead.
        "prototype$__create__Positions": {
          url: urlBase + "/MobileUsers/:id/Positions",
          method: "POST"
        },

        // INTERNAL. Use Mobile_user.Positions.destroyAll() instead.
        "prototype$__delete__Positions": {
          url: urlBase + "/MobileUsers/:id/Positions",
          method: "DELETE"
        },

        // INTERNAL. Use Mobile_user.Positions.count() instead.
        "prototype$__count__Positions": {
          url: urlBase + "/MobileUsers/:id/Positions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#create
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Mobile_user` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/MobileUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#createMany
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Mobile_user` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/MobileUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#upsert
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Mobile_user` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/MobileUsers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#exists
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/MobileUsers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#findById
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Mobile_user` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/MobileUsers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#find
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Mobile_user` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/MobileUsers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#findOne
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Mobile_user` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/MobileUsers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#updateAll
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/MobileUsers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#deleteById
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/MobileUsers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#count
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/MobileUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#prototype$updateAttributes
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Mobile_user` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/MobileUsers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#createChangeStream
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/MobileUsers/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#login
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/MobileUsers/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#logout
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Logout a user with access token
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/MobileUsers/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#confirm
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Confirm a user registration with email verification token
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/MobileUsers/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#resetPassword
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Reset password for a user with email
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/MobileUsers/reset",
          method: "POST"
        },

        // INTERNAL. Use Weatherreport.MobileUser() instead.
        "::get::weatherreport::MobileUser": {
          url: urlBase + "/WeatherReports/:id/MobileUser",
          method: "GET"
        },

        // INTERNAL. Use Position.MobileUser() instead.
        "::get::position::MobileUser": {
          url: urlBase + "/Positions/:id/MobileUser",
          method: "GET"
        },

        // INTERNAL. Use Group.MobileUsers.findById() instead.
        "::findById::group::MobileUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/MobileUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Group.MobileUsers.destroyById() instead.
        "::destroyById::group::MobileUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/MobileUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.MobileUsers.updateById() instead.
        "::updateById::group::MobileUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/MobileUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.MobileUsers() instead.
        "::get::group::MobileUsers": {
          isArray: true,
          url: urlBase + "/Groups/:id/MobileUsers",
          method: "GET"
        },

        // INTERNAL. Use Group.MobileUsers.create() instead.
        "::create::group::MobileUsers": {
          url: urlBase + "/Groups/:id/MobileUsers",
          method: "POST"
        },

        // INTERNAL. Use Group.MobileUsers.createMany() instead.
        "::createMany::group::MobileUsers": {
          isArray: true,
          url: urlBase + "/Groups/:id/MobileUsers",
          method: "POST"
        },

        // INTERNAL. Use Group.MobileUsers.destroyAll() instead.
        "::delete::group::MobileUsers": {
          url: urlBase + "/Groups/:id/MobileUsers",
          method: "DELETE"
        },

        // INTERNAL. Use Group.MobileUsers.count() instead.
        "::count::group::MobileUsers": {
          url: urlBase + "/Groups/:id/MobileUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#getCurrent
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/MobileUsers" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#updateOrCreate
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Mobile_user` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#update
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#destroyById
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#removeById
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#getCachedCurrent
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Mobile_user#login} or
         * {@link lbServices.Mobile_user#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Mobile_user instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#isAuthenticated
         * @methodOf lbServices.Mobile_user
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#getCurrentId
         * @methodOf lbServices.Mobile_user
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Mobile_user#modelName
    * @propertyOf lbServices.Mobile_user
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Mobile_user`.
    */
    R.modelName = "Mobile_user";

    /**
     * @ngdoc object
     * @name lbServices.Mobile_user.WeatherReports
     * @header lbServices.Mobile_user.WeatherReports
     * @object
     * @description
     *
     * The object `Mobile_user.WeatherReports` groups methods
     * manipulating `Weatherreport` instances related to `Mobile_user`.
     *
     * Call {@link lbServices.Mobile_user#WeatherReports Mobile_user.WeatherReports()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#WeatherReports
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Queries WeatherReports of mobile_user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Weatherreport` object.)
         * </em>
         */
        R.WeatherReports = function() {
          var TargetResource = $injector.get("Weatherreport");
          var action = TargetResource["::get::mobile_user::WeatherReports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user.WeatherReports#count
         * @methodOf lbServices.Mobile_user.WeatherReports
         *
         * @description
         *
         * Counts WeatherReports of mobile_user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.WeatherReports.count = function() {
          var TargetResource = $injector.get("Weatherreport");
          var action = TargetResource["::count::mobile_user::WeatherReports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user.WeatherReports#create
         * @methodOf lbServices.Mobile_user.WeatherReports
         *
         * @description
         *
         * Creates a new instance in WeatherReports of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Weatherreport` object.)
         * </em>
         */
        R.WeatherReports.create = function() {
          var TargetResource = $injector.get("Weatherreport");
          var action = TargetResource["::create::mobile_user::WeatherReports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user.WeatherReports#createMany
         * @methodOf lbServices.Mobile_user.WeatherReports
         *
         * @description
         *
         * Creates a new instance in WeatherReports of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Weatherreport` object.)
         * </em>
         */
        R.WeatherReports.createMany = function() {
          var TargetResource = $injector.get("Weatherreport");
          var action = TargetResource["::createMany::mobile_user::WeatherReports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user.WeatherReports#destroyAll
         * @methodOf lbServices.Mobile_user.WeatherReports
         *
         * @description
         *
         * Deletes all WeatherReports of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.WeatherReports.destroyAll = function() {
          var TargetResource = $injector.get("Weatherreport");
          var action = TargetResource["::delete::mobile_user::WeatherReports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user.WeatherReports#destroyById
         * @methodOf lbServices.Mobile_user.WeatherReports
         *
         * @description
         *
         * Delete a related item by id for WeatherReports.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for WeatherReports
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.WeatherReports.destroyById = function() {
          var TargetResource = $injector.get("Weatherreport");
          var action = TargetResource["::destroyById::mobile_user::WeatherReports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user.WeatherReports#findById
         * @methodOf lbServices.Mobile_user.WeatherReports
         *
         * @description
         *
         * Find a related item by id for WeatherReports.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for WeatherReports
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Weatherreport` object.)
         * </em>
         */
        R.WeatherReports.findById = function() {
          var TargetResource = $injector.get("Weatherreport");
          var action = TargetResource["::findById::mobile_user::WeatherReports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user.WeatherReports#updateById
         * @methodOf lbServices.Mobile_user.WeatherReports
         *
         * @description
         *
         * Update a related item by id for WeatherReports.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for WeatherReports
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Weatherreport` object.)
         * </em>
         */
        R.WeatherReports.updateById = function() {
          var TargetResource = $injector.get("Weatherreport");
          var action = TargetResource["::updateById::mobile_user::WeatherReports"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Mobile_user.Positions
     * @header lbServices.Mobile_user.Positions
     * @object
     * @description
     *
     * The object `Mobile_user.Positions` groups methods
     * manipulating `Position` instances related to `Mobile_user`.
     *
     * Call {@link lbServices.Mobile_user#Positions Mobile_user.Positions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#Positions
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Queries Positions of mobile_user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Position` object.)
         * </em>
         */
        R.Positions = function() {
          var TargetResource = $injector.get("Position");
          var action = TargetResource["::get::mobile_user::Positions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user.Positions#count
         * @methodOf lbServices.Mobile_user.Positions
         *
         * @description
         *
         * Counts Positions of mobile_user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.Positions.count = function() {
          var TargetResource = $injector.get("Position");
          var action = TargetResource["::count::mobile_user::Positions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user.Positions#create
         * @methodOf lbServices.Mobile_user.Positions
         *
         * @description
         *
         * Creates a new instance in Positions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Position` object.)
         * </em>
         */
        R.Positions.create = function() {
          var TargetResource = $injector.get("Position");
          var action = TargetResource["::create::mobile_user::Positions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user.Positions#createMany
         * @methodOf lbServices.Mobile_user.Positions
         *
         * @description
         *
         * Creates a new instance in Positions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Position` object.)
         * </em>
         */
        R.Positions.createMany = function() {
          var TargetResource = $injector.get("Position");
          var action = TargetResource["::createMany::mobile_user::Positions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user.Positions#destroyAll
         * @methodOf lbServices.Mobile_user.Positions
         *
         * @description
         *
         * Deletes all Positions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.Positions.destroyAll = function() {
          var TargetResource = $injector.get("Position");
          var action = TargetResource["::delete::mobile_user::Positions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user.Positions#destroyById
         * @methodOf lbServices.Mobile_user.Positions
         *
         * @description
         *
         * Delete a related item by id for Positions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for Positions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.Positions.destroyById = function() {
          var TargetResource = $injector.get("Position");
          var action = TargetResource["::destroyById::mobile_user::Positions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user.Positions#findById
         * @methodOf lbServices.Mobile_user.Positions
         *
         * @description
         *
         * Find a related item by id for Positions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for Positions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Position` object.)
         * </em>
         */
        R.Positions.findById = function() {
          var TargetResource = $injector.get("Position");
          var action = TargetResource["::findById::mobile_user::Positions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user.Positions#updateById
         * @methodOf lbServices.Mobile_user.Positions
         *
         * @description
         *
         * Update a related item by id for Positions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for Positions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Position` object.)
         * </em>
         */
        R.Positions.updateById = function() {
          var TargetResource = $injector.get("Position");
          var action = TargetResource["::updateById::mobile_user::Positions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Mobile_user#Group
         * @methodOf lbServices.Mobile_user
         *
         * @description
         *
         * Fetches belongsTo relation Group.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R.Group = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::get::mobile_user::Group"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Group
 * @header lbServices.Group
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Group` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Group",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Groups/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Group.MobileUsers.findById() instead.
        "prototype$__findById__MobileUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/MobileUsers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Group.MobileUsers.destroyById() instead.
        "prototype$__destroyById__MobileUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/MobileUsers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.MobileUsers.updateById() instead.
        "prototype$__updateById__MobileUsers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/MobileUsers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.Positions.findById() instead.
        "prototype$__findById__Positions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/Positions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Group.Positions.destroyById() instead.
        "prototype$__destroyById__Positions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/Positions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.Positions.updateById() instead.
        "prototype$__updateById__Positions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/Positions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.Positions.link() instead.
        "prototype$__link__Positions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/Positions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.Positions.unlink() instead.
        "prototype$__unlink__Positions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/Positions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.Positions.exists() instead.
        "prototype$__exists__Positions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/Positions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Group.WeatherReports.findById() instead.
        "prototype$__findById__WeatherReports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/WeatherReports/:fk",
          method: "GET"
        },

        // INTERNAL. Use Group.WeatherReports.destroyById() instead.
        "prototype$__destroyById__WeatherReports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/WeatherReports/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.WeatherReports.updateById() instead.
        "prototype$__updateById__WeatherReports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/WeatherReports/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.WeatherReports.link() instead.
        "prototype$__link__WeatherReports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/WeatherReports/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.WeatherReports.unlink() instead.
        "prototype$__unlink__WeatherReports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/WeatherReports/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.WeatherReports.exists() instead.
        "prototype$__exists__WeatherReports": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Groups/:id/WeatherReports/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Group.MobileUsers() instead.
        "prototype$__get__MobileUsers": {
          isArray: true,
          url: urlBase + "/Groups/:id/MobileUsers",
          method: "GET"
        },

        // INTERNAL. Use Group.MobileUsers.create() instead.
        "prototype$__create__MobileUsers": {
          url: urlBase + "/Groups/:id/MobileUsers",
          method: "POST"
        },

        // INTERNAL. Use Group.MobileUsers.destroyAll() instead.
        "prototype$__delete__MobileUsers": {
          url: urlBase + "/Groups/:id/MobileUsers",
          method: "DELETE"
        },

        // INTERNAL. Use Group.MobileUsers.count() instead.
        "prototype$__count__MobileUsers": {
          url: urlBase + "/Groups/:id/MobileUsers/count",
          method: "GET"
        },

        // INTERNAL. Use Group.Positions() instead.
        "prototype$__get__Positions": {
          isArray: true,
          url: urlBase + "/Groups/:id/Positions",
          method: "GET"
        },

        // INTERNAL. Use Group.Positions.create() instead.
        "prototype$__create__Positions": {
          url: urlBase + "/Groups/:id/Positions",
          method: "POST"
        },

        // INTERNAL. Use Group.Positions.destroyAll() instead.
        "prototype$__delete__Positions": {
          url: urlBase + "/Groups/:id/Positions",
          method: "DELETE"
        },

        // INTERNAL. Use Group.Positions.count() instead.
        "prototype$__count__Positions": {
          url: urlBase + "/Groups/:id/Positions/count",
          method: "GET"
        },

        // INTERNAL. Use Group.WeatherReports() instead.
        "prototype$__get__WeatherReports": {
          isArray: true,
          url: urlBase + "/Groups/:id/WeatherReports",
          method: "GET"
        },

        // INTERNAL. Use Group.WeatherReports.create() instead.
        "prototype$__create__WeatherReports": {
          url: urlBase + "/Groups/:id/WeatherReports",
          method: "POST"
        },

        // INTERNAL. Use Group.WeatherReports.destroyAll() instead.
        "prototype$__delete__WeatherReports": {
          url: urlBase + "/Groups/:id/WeatherReports",
          method: "DELETE"
        },

        // INTERNAL. Use Group.WeatherReports.count() instead.
        "prototype$__count__WeatherReports": {
          url: urlBase + "/Groups/:id/WeatherReports/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#create
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Groups",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#createMany
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Groups",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#upsert
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Groups",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#exists
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Groups/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#findById
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Groups/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#find
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Groups",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#findOne
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Groups/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#updateAll
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Groups/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#deleteById
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Groups/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#count
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Groups/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#prototype$updateAttributes
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Groups/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#createChangeStream
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Groups/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Mobile_user.Group() instead.
        "::get::mobile_user::Group": {
          url: urlBase + "/MobileUsers/:id/Group",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Group#updateOrCreate
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Group#update
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Group#destroyById
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Group#removeById
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Group#modelName
    * @propertyOf lbServices.Group
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Group`.
    */
    R.modelName = "Group";

    /**
     * @ngdoc object
     * @name lbServices.Group.MobileUsers
     * @header lbServices.Group.MobileUsers
     * @object
     * @description
     *
     * The object `Group.MobileUsers` groups methods
     * manipulating `Mobile_user` instances related to `Group`.
     *
     * Call {@link lbServices.Group#MobileUsers Group.MobileUsers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Group#MobileUsers
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Queries MobileUsers of group.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Mobile_user` object.)
         * </em>
         */
        R.MobileUsers = function() {
          var TargetResource = $injector.get("Mobile_user");
          var action = TargetResource["::get::group::MobileUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.MobileUsers#count
         * @methodOf lbServices.Group.MobileUsers
         *
         * @description
         *
         * Counts MobileUsers of group.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.MobileUsers.count = function() {
          var TargetResource = $injector.get("Mobile_user");
          var action = TargetResource["::count::group::MobileUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.MobileUsers#create
         * @methodOf lbServices.Group.MobileUsers
         *
         * @description
         *
         * Creates a new instance in MobileUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Mobile_user` object.)
         * </em>
         */
        R.MobileUsers.create = function() {
          var TargetResource = $injector.get("Mobile_user");
          var action = TargetResource["::create::group::MobileUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.MobileUsers#createMany
         * @methodOf lbServices.Group.MobileUsers
         *
         * @description
         *
         * Creates a new instance in MobileUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Mobile_user` object.)
         * </em>
         */
        R.MobileUsers.createMany = function() {
          var TargetResource = $injector.get("Mobile_user");
          var action = TargetResource["::createMany::group::MobileUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.MobileUsers#destroyAll
         * @methodOf lbServices.Group.MobileUsers
         *
         * @description
         *
         * Deletes all MobileUsers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.MobileUsers.destroyAll = function() {
          var TargetResource = $injector.get("Mobile_user");
          var action = TargetResource["::delete::group::MobileUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.MobileUsers#destroyById
         * @methodOf lbServices.Group.MobileUsers
         *
         * @description
         *
         * Delete a related item by id for MobileUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for MobileUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.MobileUsers.destroyById = function() {
          var TargetResource = $injector.get("Mobile_user");
          var action = TargetResource["::destroyById::group::MobileUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.MobileUsers#findById
         * @methodOf lbServices.Group.MobileUsers
         *
         * @description
         *
         * Find a related item by id for MobileUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for MobileUsers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Mobile_user` object.)
         * </em>
         */
        R.MobileUsers.findById = function() {
          var TargetResource = $injector.get("Mobile_user");
          var action = TargetResource["::findById::group::MobileUsers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.MobileUsers#updateById
         * @methodOf lbServices.Group.MobileUsers
         *
         * @description
         *
         * Update a related item by id for MobileUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for MobileUsers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Mobile_user` object.)
         * </em>
         */
        R.MobileUsers.updateById = function() {
          var TargetResource = $injector.get("Mobile_user");
          var action = TargetResource["::updateById::group::MobileUsers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Group.Positions
     * @header lbServices.Group.Positions
     * @object
     * @description
     *
     * The object `Group.Positions` groups methods
     * manipulating `Position` instances related to `Group`.
     *
     * Call {@link lbServices.Group#Positions Group.Positions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Group#Positions
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Queries Positions of group.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Position` object.)
         * </em>
         */
        R.Positions = function() {
          var TargetResource = $injector.get("Position");
          var action = TargetResource["::get::group::Positions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.Positions#count
         * @methodOf lbServices.Group.Positions
         *
         * @description
         *
         * Counts Positions of group.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.Positions.count = function() {
          var TargetResource = $injector.get("Position");
          var action = TargetResource["::count::group::Positions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.Positions#create
         * @methodOf lbServices.Group.Positions
         *
         * @description
         *
         * Creates a new instance in Positions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Position` object.)
         * </em>
         */
        R.Positions.create = function() {
          var TargetResource = $injector.get("Position");
          var action = TargetResource["::create::group::Positions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.Positions#createMany
         * @methodOf lbServices.Group.Positions
         *
         * @description
         *
         * Creates a new instance in Positions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Position` object.)
         * </em>
         */
        R.Positions.createMany = function() {
          var TargetResource = $injector.get("Position");
          var action = TargetResource["::createMany::group::Positions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.Positions#destroyAll
         * @methodOf lbServices.Group.Positions
         *
         * @description
         *
         * Deletes all Positions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.Positions.destroyAll = function() {
          var TargetResource = $injector.get("Position");
          var action = TargetResource["::delete::group::Positions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.Positions#destroyById
         * @methodOf lbServices.Group.Positions
         *
         * @description
         *
         * Delete a related item by id for Positions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for Positions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.Positions.destroyById = function() {
          var TargetResource = $injector.get("Position");
          var action = TargetResource["::destroyById::group::Positions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.Positions#exists
         * @methodOf lbServices.Group.Positions
         *
         * @description
         *
         * Check the existence of Positions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for Positions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Position` object.)
         * </em>
         */
        R.Positions.exists = function() {
          var TargetResource = $injector.get("Position");
          var action = TargetResource["::exists::group::Positions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.Positions#findById
         * @methodOf lbServices.Group.Positions
         *
         * @description
         *
         * Find a related item by id for Positions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for Positions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Position` object.)
         * </em>
         */
        R.Positions.findById = function() {
          var TargetResource = $injector.get("Position");
          var action = TargetResource["::findById::group::Positions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.Positions#link
         * @methodOf lbServices.Group.Positions
         *
         * @description
         *
         * Add a related item by id for Positions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for Positions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Position` object.)
         * </em>
         */
        R.Positions.link = function() {
          var TargetResource = $injector.get("Position");
          var action = TargetResource["::link::group::Positions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.Positions#unlink
         * @methodOf lbServices.Group.Positions
         *
         * @description
         *
         * Remove the Positions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for Positions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.Positions.unlink = function() {
          var TargetResource = $injector.get("Position");
          var action = TargetResource["::unlink::group::Positions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.Positions#updateById
         * @methodOf lbServices.Group.Positions
         *
         * @description
         *
         * Update a related item by id for Positions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for Positions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Position` object.)
         * </em>
         */
        R.Positions.updateById = function() {
          var TargetResource = $injector.get("Position");
          var action = TargetResource["::updateById::group::Positions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Group.WeatherReports
     * @header lbServices.Group.WeatherReports
     * @object
     * @description
     *
     * The object `Group.WeatherReports` groups methods
     * manipulating `Weatherreport` instances related to `Group`.
     *
     * Call {@link lbServices.Group#WeatherReports Group.WeatherReports()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Group#WeatherReports
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Queries WeatherReports of group.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Weatherreport` object.)
         * </em>
         */
        R.WeatherReports = function() {
          var TargetResource = $injector.get("Weatherreport");
          var action = TargetResource["::get::group::WeatherReports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.WeatherReports#count
         * @methodOf lbServices.Group.WeatherReports
         *
         * @description
         *
         * Counts WeatherReports of group.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.WeatherReports.count = function() {
          var TargetResource = $injector.get("Weatherreport");
          var action = TargetResource["::count::group::WeatherReports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.WeatherReports#create
         * @methodOf lbServices.Group.WeatherReports
         *
         * @description
         *
         * Creates a new instance in WeatherReports of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Weatherreport` object.)
         * </em>
         */
        R.WeatherReports.create = function() {
          var TargetResource = $injector.get("Weatherreport");
          var action = TargetResource["::create::group::WeatherReports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.WeatherReports#createMany
         * @methodOf lbServices.Group.WeatherReports
         *
         * @description
         *
         * Creates a new instance in WeatherReports of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Weatherreport` object.)
         * </em>
         */
        R.WeatherReports.createMany = function() {
          var TargetResource = $injector.get("Weatherreport");
          var action = TargetResource["::createMany::group::WeatherReports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.WeatherReports#destroyAll
         * @methodOf lbServices.Group.WeatherReports
         *
         * @description
         *
         * Deletes all WeatherReports of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.WeatherReports.destroyAll = function() {
          var TargetResource = $injector.get("Weatherreport");
          var action = TargetResource["::delete::group::WeatherReports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.WeatherReports#destroyById
         * @methodOf lbServices.Group.WeatherReports
         *
         * @description
         *
         * Delete a related item by id for WeatherReports.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for WeatherReports
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.WeatherReports.destroyById = function() {
          var TargetResource = $injector.get("Weatherreport");
          var action = TargetResource["::destroyById::group::WeatherReports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.WeatherReports#exists
         * @methodOf lbServices.Group.WeatherReports
         *
         * @description
         *
         * Check the existence of WeatherReports relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for WeatherReports
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Weatherreport` object.)
         * </em>
         */
        R.WeatherReports.exists = function() {
          var TargetResource = $injector.get("Weatherreport");
          var action = TargetResource["::exists::group::WeatherReports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.WeatherReports#findById
         * @methodOf lbServices.Group.WeatherReports
         *
         * @description
         *
         * Find a related item by id for WeatherReports.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for WeatherReports
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Weatherreport` object.)
         * </em>
         */
        R.WeatherReports.findById = function() {
          var TargetResource = $injector.get("Weatherreport");
          var action = TargetResource["::findById::group::WeatherReports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.WeatherReports#link
         * @methodOf lbServices.Group.WeatherReports
         *
         * @description
         *
         * Add a related item by id for WeatherReports.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for WeatherReports
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Weatherreport` object.)
         * </em>
         */
        R.WeatherReports.link = function() {
          var TargetResource = $injector.get("Weatherreport");
          var action = TargetResource["::link::group::WeatherReports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.WeatherReports#unlink
         * @methodOf lbServices.Group.WeatherReports
         *
         * @description
         *
         * Remove the WeatherReports relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for WeatherReports
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.WeatherReports.unlink = function() {
          var TargetResource = $injector.get("Weatherreport");
          var action = TargetResource["::unlink::group::WeatherReports"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.WeatherReports#updateById
         * @methodOf lbServices.Group.WeatherReports
         *
         * @description
         *
         * Update a related item by id for WeatherReports.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for WeatherReports
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Weatherreport` object.)
         * </em>
         */
        R.WeatherReports.updateById = function() {
          var TargetResource = $injector.get("Weatherreport");
          var action = TargetResource["::updateById::group::WeatherReports"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Storage
 * @header lbServices.Storage
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Storage` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Storage",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Containers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Storage#getContainers
         * @methodOf lbServices.Storage
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Storage` object.)
         * </em>
         */
        "getContainers": {
          isArray: true,
          url: urlBase + "/Containers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Storage#createContainer
         * @methodOf lbServices.Storage
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Storage` object.)
         * </em>
         */
        "createContainer": {
          url: urlBase + "/Containers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Storage#destroyContainer
         * @methodOf lbServices.Storage
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "destroyContainer": {
          url: urlBase + "/Containers/:container",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Storage#getContainer
         * @methodOf lbServices.Storage
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Storage` object.)
         * </em>
         */
        "getContainer": {
          url: urlBase + "/Containers/:container",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Storage#getFiles
         * @methodOf lbServices.Storage
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Storage` object.)
         * </em>
         */
        "getFiles": {
          isArray: true,
          url: urlBase + "/Containers/:container/files",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Storage#getFile
         * @methodOf lbServices.Storage
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Storage` object.)
         * </em>
         */
        "getFile": {
          url: urlBase + "/Containers/:container/files/:file",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Storage#removeFile
         * @methodOf lbServices.Storage
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "removeFile": {
          url: urlBase + "/Containers/:container/files/:file",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Storage#upload
         * @methodOf lbServices.Storage
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "upload": {
          url: urlBase + "/Containers/:container/upload",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Storage#download
         * @methodOf lbServices.Storage
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "download": {
          url: urlBase + "/Containers/:container/download/:file",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Storage#modelName
    * @propertyOf lbServices.Storage
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Storage`.
    */
    R.modelName = "Storage";


    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
