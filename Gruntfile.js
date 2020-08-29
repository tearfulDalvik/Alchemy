module.exports = function (grunt) {
  let DEBUG = true;
  let VERSION = '1.0.0-alpha.7';

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
          alchemy_url: DEBUG ? '../../dist/alchemy.min.css' : `https://cdn.jsdelivr.net/gh/tearfuldalvik/alchemy@${VERSION}/dist/alchemy.min.css`,
          debug_scripts: DEBUG ? '<script src="//localhost:35729/livereload.js"></script>' : '<div class="copyright"><p>© 2020 Gufeng Shen</p></div>'
        },
        src: ['docs/*.ejs'],
        dest: 'dist/',
        expand: true,
        ext: '.html',
      },
    },
    serve: {
      'path': 'dist/'
    },
    webpack: {
      myConfig: require('./webpack.config.js'),
    },
    rsync: {
      options: {
        args: ["-avz"],
        exclude: [".DS_Store", "docs"],
        recursive: true
      },
      frontend: {
        options: {
          src: "./dist/",
          dest: "../dalvik-club-frontend/dist/"
        }
      },
    },
    watch: {
      options: {
        interrupt: true,
        livereload: true,
      },
      scripts: {
        files: ['scss/**/*.scss', 'docs/*.ejs', 'js/**/*.js'],
        tasks: ['build', 'serve'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-ejs');
  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-rsync');

  grunt.registerTask('build', ['sass', 'cssmin', 'ejs', 'webpack', 'rsync']);
}