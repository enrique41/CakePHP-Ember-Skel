/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    appDir:    'webroot/js/app',
    vendorDir: 'webroot/js/vendor',
    distDir:   'webroot/js/dist',
    specsDir:  'webroot/js/specs',
    concat: {
      setup: {
        src: [
          '<%= appDir %>/Config/setup.js',
          '<%= appDir %>/Config/utilities.js'
        ],
        dest: '<%= distDir %>/setup.js'
      },
      specSetup: {
        src: [
          '<%= appDir %>/Config/spec_setup.js',
          '<%= appDir %>/Config/utilities.js'
        ],
        dest: '<%= distDir %>/spec_setup.js'
      },
      libs: {
        src: [
          '<%= vendorDir %>/jquery-1.8.3.js',
          '<%= vendorDir %>/handlebars-1.0.rc.1.js',
          '<%= vendorDir %>/ember.js',
          '<%= vendorDir %>/ember-data.js'
        ],
        dest: '<%= distDir %>/libraries.js'
      },
      specLibs: {
        src: [
          '<%= vendorDir %>/mocha.js',
          '<%= vendorDir %>/chai.js'
        ],
        dest: '<%= distDir %>/spec_libs.js'
      },
      init: {
        src: [
          '<%= appDir %>/Config/initialize.js',
          '<%= appDir %>/Config/seed.js'
        ],
        dest: '<%= distDir %>/initialize.js'
      },
      specInit: {
        src: ['<%= appDir %>/Config/fixtures.js'],
        dest: '<%= distDir %>/spec_init.js'
      },
      app: {
        src: [
          '<%= appDir %>/Model/*.js',
          '<%= appDir %>/Controller/*.js',
          '<%= appDir %>/View/*.js',
          '<%= appDir %>/Config/router.js',
          '<%= appDir %>/Route/*.js'
        ],
        dest: '<%= distDir %>/application.js'
      },
      specs: {
        src: ['<%= specsDir %>/**/*.js'],
        dest: '<%= distDir %>/specs.js'
      }
    },
    min: {
      libs: {
        src: ['<%= distDir %>/libraries.js'],
        dest: '<%= distDir %>/libraries.min.js'
      },
      app: {
        src: [
          '<%= distDir %>/setup.js',
          '<%= distDir %>/application.js',
          '<%= distDir %>/initialize.js'
        ],
        dest: '<%= distDir %>/application.min.js',
        separator: ';'
      }
    },
    watch: {
      files: '<%= appDir %>/**/*.js',
      tasks: 'concat'
    }
  });

  // Default task.
  grunt.registerTask('default', 'concat');

  // Build task.
  grunt.registerTask('build', 'concat min');
};
