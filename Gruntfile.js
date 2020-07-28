module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/alchemy.css': 'scss/alchemy.scss',
        }
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/alchemy.min.css': ['dist/alchemy.css']
        }
      }
    },
    ejs: {
      all: {
        options: {
          alchemy_url: '../../dist/alchemy.min.css'
        },
        src: ['docs/*.ejs'],
        dest: 'dist/',
        expand: true,
        ext: '.html',
      },
    },
    watch: {
      scripts: {
        files: ['scss/*.scss', 'docs/*.ejs'],
        tasks: ['build'],
        options: {
          interrupt: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-ejs');

  grunt.registerTask('build', ['sass', 'cssmin', 'ejs']);
}
