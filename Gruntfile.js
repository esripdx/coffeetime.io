module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['./assets/**/*'],
        tasks: ['compass'],
        options: {
          nospawn: true
        }
      }
    },
    compass: {
      dev: {
        options: {
          sassDir: 'assets/sass',
          cssDir: 'assets/css'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task(s)
  grunt.registerTask('default', ['watch']);

};