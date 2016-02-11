'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          'dist/index.js': ['src/**/*.js', 'src/**/*.jsx'],
        },
        options: {
          transform: ['babelify']
        }
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'dist/screen.css': ['src/css/layout.scss']       // 'destination': 'source'
        }
      }
    },
    copy: {
      dist : {
        files : [
            // includes files within path and its sub-directories
          {
            expand: true,
            cwd: 'public/',
            src: ['**'],
            dest: 'dist/'
          }
        ]
      }
    },
    express: {
      dev: {
        options: {
          script: 'main.js'
        }
      }
    },
    watch: {
      options: {
        livereload: 8083
      },
      js: {
        files: ['src/**/*.js'],
        tasks: ['browserify:dist']
      },
      css: {
        files: ['src/**/*.scss'],
        tasks: ['sass']
      },
      public: {
        files: ['public/**/*'],
        tasks: ['copy']
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['browserify:dist']);

  grunt.registerTask('compile', ['browserify:dist', 'sass', 'copy']);

  grunt.registerTask('dev', ['compile', 'express:dev', 'watch']);
  grunt.registerTask('default', 'dev');
};
