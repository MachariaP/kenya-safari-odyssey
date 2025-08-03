module.exports = function (grunt) {
  // Automatically load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  // Grunt configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), // Load package.json for metadata
    svgmin: {
      options: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false, // Preserve viewBox for Hero scaling
                cleanupIDs: false, // Keep IDs for CSS selectors
                sortAttrs: false // Maintain attribute order
              }
            }
          },
          { removeUselessStrokeAndFill: false }, // Keep styles for animations
          { removeHiddenElems: true },
          { removeEmptyText: true },
          { removeEmptyAttrs: true }
        ]
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/assets/svgs', // Source folder
            src: ['*.svg'], // All SVGs
            dest: 'public/images' // Output folder
          }
        ]
      }
    }
  });

  // Register default task
  grunt.registerTask('default', ['svgmin']);
};