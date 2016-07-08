'use strict';

var buildClientBundle = require('./client/lbclient/build');
var fs = require('fs');
var path = require('path');

module.exports = function(grunt) {
  
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'client/dist'
  };
  
  // Configuration for grunt tasks
  grunt.initConfig({
    loopback_sdk_angular: {
      services: {
        options: {
          input: 'server/server.js',
          output: 'client/js/lb-services.js'
        }
      }
    },
    docular: {
      groups: [
        {
          groupTitle: 'LoopBack',
          groupId: 'loopback',
          sections: [
            {
              id: 'lbServices',
              title: 'LoopBack Services',
              scripts: [ 'client/js/lb-services.js' ]
            }
          ]
        }
      ]
    },
    docularserver: {
      targetDir: "docular_generated"
    },
    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['<%= yeoman.app %>/test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      lbclient: {
        files: [
          'lbclient/models/*',
          'lbclient/app*',
          'lbclient/datasources*',
          'lbclient/models*',
          'lbclient/build.js'
        ],
        tasks: ['build-lbclient'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
      },
      config: {
        files: ['<%= yeoman.app %>/config/*.json'],
        tasks: ['build-config'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
      },
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 3000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect().use(
                '/lbclient',
                connect.static('./lbclient')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: '<%= yeoman.app %>/test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp',
      lbclient: 'lbclient/browser.bundle.js',
      config: '<%= yeoman.app %>/config/bundle.js'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      options: {
        cwd: '<%= yeoman.app %>',
        bowerJson: require('./bower.json'),
        directory: './bower_components' //require('./.bowerrc').directory
      },
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath:  /..\//
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/styles/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>','<%= yeoman.dist %>/images']
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'views/{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // ngAnnotate tries to make the code safe for minification automatically by
    // using the Angular long form for dependency injection. It doesn't work on
    // things like resolve or inject so those have to be done manually.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'fonts/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: '<%= yeoman.app %>/test/karma.conf.js',
        browsers: [ 'PhantomJS' ],
        singleRun: true
      }
    },

    // Server Tests
    mochaTest: {
      common: {
        options: {
          reporter: 'spec',
          quiet: false,
          clearRequireCache: false
        },
        src: ['common/models/test/**/*.js']
      },
      server: {
        options: {
          reporter: 'spec',
          quiet: false,
          clearRequireCache: false
        },
        src: ['server/test/**/*.js']
      }
    },
    
    // Text replace task (to correct generated browser.bundle.js sync library)
    replace: {
      
      windowLocationFix: {
        src: ['client/lbclient/browser.bundle.js'],
        overwrite: true,
        replacements: [{
          from: "opts.protocol = opts.protocol || window.location.protocol",
          to: function() {
            var str = grunt.file.read('client/lbclient/overwrite.js');
            return str.match(/if\(!opts.uri[\s\S]*?;\n\t\t}/);
          }
        }]
      },
      authorizationHeaderAddition: {
        src: ['client/lbclient/browser.bundle.js'],
        overwrite: true,
        replacements: [{
          from: "opts.headers = opts.headers || {}",
          to: function(matchedString) {
            return matchedString + "\n" + grunt.file.read('client/lbclient/overwrite.js').match(/opts.headers[\s\S]*""\);/);
          }
        }]
      },
      filterUnknownPropertiesFix: {
        src: ['client/lbclient/browser.bundle.js'],
        overwrite: true,
        replacements: [{
          from: "this.__unknownProperties = [];",
          to: function(matchedString) {
            return grunt.file.read('client/lbclient/overwrite.js').match(/this.__unknownProperties[\s\S]*?{};/);
          }}, {
          from: "this.__unknownProperties.push(p);",
          to: function(matchedString) {
            return grunt.file.read('client/lbclient/overwrite.js').match(/this.__unknownProperties[\s\S]*?\[p\];/);
          }}
        ] 
      },
      
      initialCollectionFix: {
        src: ['client/lbclient/browser.bundle.js'],
        overwrite: true,
        replacements: [{
          from: "return this.cache[model];",
          to: function() {
            var str = grunt.file.read('client/lbclient/overwrite.js');
            return str.match(/\/\/ Fill in empty[\s\S]*?model];/);
          }
        }]
      },
      loopbackTokenFix: {
        src: ['client/lbclient/browser.bundle.js'],
        overwrite: true,
        replacements: [{
          from: /app\.use\(loopback\.token[\s\S]*?}\)\);/,
          to: ""
        }]
      },
      callbackApplyFix: {
        src: ['client/lbclient/browser.bundle.js'],
        overwrite: true,
        replacements: [{
          from: /callback.apply\(invocation, args\);/,
          to: "if(callback) { callback.apply(invocation, args); }"
        }]
      },
      exampleRegexpFix: {
        src: ['client/lbclient/browser.bundle.js'],
        overwrite: true,
        replacements: [{
          from: "if (example.regexp)",
          to: "if(example===null) {return null;} if(example.regexp)"
        }]
      },
      loadFromFile: {
        src: ['client/lbclient/browser.bundle.js'],
        overwrite: true,
        replacements: [{
          from: /Memory\.prototype\.loadFromFile[\s\S]*?\n};/,
          to: function() {
            var str = grunt.file.read('client/lbclient/overwrite.js');
            return str.match(/Memory\.prototype\.loadFromFile[\s\S]*?\n\t};/);
          }
        }]
      },
      saveToFile: {
        src: ['client/lbclient/browser.bundle.js'],
        overwrite: true,
        replacements: [{
          from: /Memory\.prototype\.saveToFile[\s\S]*?\n};/,
          to: function() {
            var str = grunt.file.read('client/lbclient/overwrite.js');
            return str.match(/Memory\.prototype\.saveToFile[\s\S]*?\n\t};/);
          }
        }]
      },
      offlineLogin: {
        src: ['client/lbclient/browser.bundle.js'],
        overwrite: true,
        replacements: [{
          from: /if \(self.settings.emailVerificationRequired[\s\S]*?user.createAccessToken\(credentials.ttl, credentials, tokenHandler\);[\s]*?}[\s]*?}/,
          to: "var value = {user: user.toJSON(), id: null}; fn(null, value);"
        }]
      },
      updateOptimizationEqualityCheck: {
        src: ['client/lbclient/browser.bundle.js'],
        overwrite: true,
        replacements: [{
          from: /switch \(update.type[\s\S]*?break;[\s]*?}/,
          to: function() {
            var str = grunt.file.read('client/lbclient/overwrite.js');
            return str.match(/if\(!current[\s\S]*?break;[\s]*?}[\s]*?}/);
          }
        }]
      }
    },
      surround: {
        options: {
          prepend: '/*Generated file.  Do not modify.  See ace-api repository.*/ if(typeof DedicatedWorkerGlobalScope != "undefined" && this instanceof DedicatedWorkerGlobalScope) {',
          append: '}',
          overwrite: true,
        },
        files: {
          src: 'client/lbclient/browser.bundle.js'
        }
      }
  });
 
  // Load the plugin that provides the "loopback-sdk-angular" and "grunt-docular" tasks.
  grunt.loadNpmTasks('grunt-loopback-sdk-angular');
  grunt.loadNpmTasks('grunt-docular');
  
  // Load text replace module (used to correct generate browser.bundle.js error with window.location.protocol)
  grunt.loadNpmTasks('grunt-text-replace');
  
  // Load surround task (to ensure browser.bundle.js will load only in a web browser)
  grunt.loadNpmTasks('grunt-surround');
  
  // Default task(s).
  grunt.registerTask('default', ['loopback_sdk_angular', 'docular']);
  
  grunt.registerTask('build-lbclient', 'Build lbclient browser bundle', function() {
    var done = this.async();
    buildClientBundle(process.env.NODE_ENV || 'development', done);
    
    // Correct the browser bundle
    grunt.task.run('replace');
    
    // Surround to ensure it loads only in a web worker thread
    grunt.task.run('surround');
  });

  grunt.registerTask('build-config', 'Build confg.js from JSON files', function() {
    var ngapp = path.resolve(__dirname, appConfig.app);
    var configDir = path.join(ngapp, 'config');
    var config = {};

    fs.readdirSync(configDir)
      .forEach(function(f) {
        if (f === 'bundle.js') return;

        var extname = path.extname(f);
        if (extname !== '.json') {
          grunt.warn('Ignoring ' + f + ' (' + extname + ')');
          return;
        }

        var fullPath = path.resolve(configDir, f);
        var key = path.basename(f, extname);

        config[key] = JSON.parse(fs.readFileSync(fullPath), 'utf-8');
      });

    var outputPath = path.resolve(ngapp, 'config', 'bundle.js');
    var content = 'window.CONFIG = ' +
        JSON.stringify(config, null, 2) +
        ';\n';
    fs.writeFileSync(outputPath, content, 'utf-8');
  });

  grunt.registerTask('run', 'Start the app server', function() {
    var done = this.async();

    var connectConfig = grunt.config.get().connect.options;
    process.env.LIVE_RELOAD = connectConfig.livereload;
    process.env.NODE_ENV = this.args[0];

    var keepAlive = this.flags.keepalive || connectConfig.keepalive;

    var server = require('./server');
    server.set('port', connectConfig.port);
    server.set('host', connectConfig.hostname);
    server.start()
      .on('listening', function() {
        if (!keepAlive) done();
      })
      .on('error', function(err) {
        if (err.code === 'EADDRINUSE') {
          grunt.fatal('Port ' + connectConfig.port +
            ' is already in use by another process.');
        } else {
          grunt.fatal(err);
        }
      });
  });

  grunt.registerTask('serve', 'Compile then start the app server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'run:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'build-lbclient',
      'build-config',
      'wiredep',
      'concurrent:server',
      'autoprefixer',
      'run:development',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test:client', [
    'clean:server',
    'build-lbclient',
    'build-config',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('test:common', [
    'mochaTest:common'
  ]);

  grunt.registerTask('test:server', [
    'mochaTest:server'
  ]);

  grunt.registerTask('test', [
    'test:server',
    'test:common',
    'test:client'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'build-lbclient',
    'build-config',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};