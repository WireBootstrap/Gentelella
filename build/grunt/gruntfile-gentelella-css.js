module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        //meta: {
        //    basePath: '../'
        //},

        cssmin: {
            target: {
                files: [{
                    //                    expand: true,
                    //cwd: '../bootstrap',
                    src: ['../../css/eb-gentelella.css'],
                    dest: '../lib/eb-gentelella.min.css',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['cssmin']);

};