# ACE API

## Intro and Overview
This is the server-side API compliment to the ace-cordova-app project (https://github.com/ua-snap/ace-cordova-app).  It 
was developed using [Loopback](https://loopback.io).  It is currently configured to be deployed via Heroku (Procfile) 
and be connected to a MongoDb database.  

## Code Structure
### Server API Code
The Loopback base for this API allows it to be easily modified and extended to meet any organization's requirements.  All
data models are defined in the [common/models/](https://github.com/ua-snap/ace-api/tree/master/common/models) directory.
Any changes can be made here or using the [Loopback command line utility](https://docs.strongloop.com/display/NODE/Command-line+reference).
All server configuration is done in the [server/](https://github.com/ua-snap/ace-api/tree/master/server) directory.  Boot
scripts, including data setup scripts can be found at [server/boot/](https://github.com/ua-snap/ace-api/tree/master/server/boot).

### Loopback sync client code
The [client/lbclient](https://github.com/ua-snap/ace-api/tree/master/client/lbclient) directory contains all the JavaScript
code for the Loopback synchronization library.  After configuring the client library to match the models in the server
code, the bundled library can be generated via grunt: "grunt build-lbclient".  That file, along with the lbclient.js file,
allow Loopback to be run in a browser.  (Example app: https://github.com/strongloop/loopback-example-offline-sync, 
documentation: https://docs.strongloop.com/display/public/LB/Synchronization)

## Disclaimer
While this project does demonstrate basic functionality, it is not complete.  Remaining work is documented in the issues section of the [ace-cordova-app](https://github.com/ua-snap/ace-cordova-app)
repository.

## Hosting Suggestions
This projec is pre-configured to be hosted on [heroku.com](https://www.heroku.com).  After downloading and installing
the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command), you can deploy the ACE API project by following the
[instructions for node.js deployment](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction) provided
on Heroku's website.
Additionally, this project is configured to connect to a MongoDB database.  Hosting is available with several providers. 
[mongolab](https://www.mongolab.com) offers free hosting up to 500 mb and has a plugin already integrated with Heroku.
Note that Loopback offers [other database connectors](https://docs.strongloop.com/display/public/LB/Database+connectors) to 
allow developers the freedom to utilize the database system of their choosing.

## Quick Start Guide
1. Clone this repository into a local machine.
2. Run "npm install"
3. Change the MongoDB connection string in the [server/datasources.json](https://github.com/ua-snap/ace-api/tree/master/server/datasources.json) file to point to your MongoDB instance
4. Run "node ." from the root project directory to launch the application.

For a full "Getting Started" tutorial, visit the [ACE Mobile Application wiki](https://github.com/ua-snap/ace-cordova-app/wiki/Getting-Started).
