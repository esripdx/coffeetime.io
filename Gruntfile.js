var fs = require('fs'),
    marked = require('marked'),
    handlebars = require('handlebars');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['./source/**/*'],
        tasks: ['build'],
        options: {
          nospawn: true
        }
      }
    },
    compass: {
      dev: {
        options: {
          sassDir: 'source/sass',
          cssDir: 'build/assets/css'
        }
      }
    },
    'http-server': {
      'dev': {
        root: './build',
        port: 8080,
        host: '0.0.0.0',
        showDir : true,
        autoIndex: true,
        defaultExt: "html",
        runInBackground: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-http-server');

  // Default task(s)
  grunt.registerTask('server', ['http-server:dev']);
  grunt.registerTask('build', ['compass', 'api']);
  grunt.registerTask('default', ['build', 'server', 'watch']);

  grunt.registerTask('api', 'Build the API page.', function ( ) {
    var api = fs.readFileSync(__dirname + "/source/api/index.hb", "utf8");
    var apiHb = handlebars.compile(api);
    var docs = fs.readFileSync(__dirname + "/source/api/api.md", "utf8");
    var out = apiHb({ api: marked(docs) });
    fs.writeFileSync(__dirname + "/build/api/index.html", out, "utf8");
  });
};
