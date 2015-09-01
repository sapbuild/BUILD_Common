var helper = require('norman-build-helper');

//var remote = "origin/master";

var subProjects = [
    'server/common-server'
];

module.exports = function (grunt) {
    helper.setGrunt(grunt);

    helper.grunt.loadTasks('grunt-svg-sprite');
    helper.grunt.loadTasks('grunt-contrib-clean');
    helper.grunt.loadTasks('grunt-text-replace');
    helper.grunt.loadTasks('grunt-file-append');
    helper.grunt.loadTasks('grunt-svgmin');
    helper.grunt.loadTasks('grunt-bump');
    helper.grunt.loadTasks('grunt-eslint');

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    grunt.initConfig({
        // vars
        bump: require('./grunt-conf/bump'),
        env: {
            dev: { NODE_ENV: 'development' },
            prod: { NODE_ENV: 'production' },
            test: { NODE_ENV: 'test' },
            jenkins: { NODE_ENV: 'jenkins' },
            client: 'sample/client',
            server: 'sample/server'
        },
        pkg: grunt.file.readJSON('package.json'),
        publish: require('./grunt-conf/publish'),
        // Empties folders to start fresh
        clean: require('./grunt-conf/clean.js'),
        // convert svg images to sprite
        svg_sprite: require('./grunt-conf/svg-sprite.js'),
        
        // Make sure code styles are up to par and there are no obvious mistakes
        eslint: require('./grunt-conf/eslint.js'),
        replace: require('./grunt-conf/sprite-text-replace.js'),
        file_append: require('./grunt-conf/svg-file-append.js'),
        svgmin: require('./grunt-conf/svg-min.js')
    });


    grunt.registerTask('default', [ 'build' ]);
    grunt.registerTask('dist', [ 'build' ]);
    grunt.registerTask('test', function () {

    });

    grunt.registerTask('build', function (target) {
        target = target || 'dev';
        var tasks = [
            'eslint:client',
            //'clean:' + target,
            //'svg-sprite',
            'sub-projects'
        ];

        return grunt.task.run(tasks);
    });

    grunt.registerTask('dev', [ 'build:dev']);
    grunt.registerTask('svg-sprite', [ 'clean:svg', 'svg_sprite', 'svgmin', 'replace', 'file_append']);

    grunt.registerTask('sub-projects', 'Run grunt build on sub-projects', function () {
        var done = this.async();
        helper.grunt.reactor.runTarget('build', subProjects, done);
    });
};
