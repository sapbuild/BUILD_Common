var helper = require("norman-build-helper");

module.exports = function (grunt) {
    helper.setGrunt(grunt);

    grunt.initConfig({
        eslint: require("./build/grunt-eslint"),
        mochaTest: require("./build/grunt-mocha")
    });

    helper.grunt.loadTasks("grunt-mocha-test");
    helper.grunt.loadTasks("grunt-eslint");

    grunt.registerTask("default", [ "build" ]);
    grunt.registerTask("build", [ "eslint", "test" ]);

    grunt.registerTask("test", [ "mochaTest" ]);
};
