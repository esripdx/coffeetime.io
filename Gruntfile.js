var fs = require('fs'),
    marked = require('marked'),
    handlebars = require('handlebars');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['./src/sass/*', './src/*'],
        tasks: ['compass', 'api'],
        options: {
          nospawn: true
        }
      }
    },
    compass: {
      dev: {
        options: {
          sassDir: 'src/sass',
          cssDir: 'htdocs/assets/css'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task(s)
  grunt.registerTask('default', ['watch']);

  grunt.registerTask('api', 'Build the API page.', function ( ) {
    var api = fs.readFileSync(__dirname + "/src/api.hb", "utf8");
    var apiHb = handlebars.compile(api);

    var docs = fs.readFileSync(__dirname + "/src/api.md", "utf8");

    var out = apiHb({ api: marked(docs) });

    fs.writeFileSync(__dirname + "/htdocs/api/index.html", out, "utf8");
  });
};