/**
 * Usage:
 * `grunt`: Runs bower, copies files into sensible locations, and compiles JS
 * `grunt init`: Runs bower, copies files into sensible locations, compiles JS and OVERWRITES bootstrap-overrides
 * `grunt watch`: Compiles JS and watches for changes
 */

var dest = 'public_html/resources/3p/';

var config = {
    bowercopy: {
        options: {
            runBower: true,
            clean: true
        },

        bootstrap: {
            options: {
                destPrefix: dest + 'scss'
            },

            files: {
                'bootstrap': 'bootstrap-sass-official/assets/stylesheets/bootstrap'
            }
        },

        sass: {
            options: {
                destPrefix: 'public_html/resources/scss'
            },

            files: {
                '_bootstrap.scss': 'bootstrap-sass-official/assets/stylesheets/_bootstrap.scss'
            }
        },

        fonts: {
            options: {
                destPrefix: dest + 'fonts'
            },

            files: {
                'bootstrap': 'bootstrap-sass-official/assets/fonts/bootstrap'
            }
        },

        js: {
            options: {
                destPrefix: dest + 'js'
            },

            files: {
                'jquery.js': 'jquery/dist/jquery.js',
                'bootstrap.js': 'bootstrap-sass-official/assets/javascripts/bootstrap.js'
            }
        }
    },

    replace: {
        bootstrap: {
            src: [ 'public_html/resources/scss/_bootstrap.scss' ],
            overwrite: true,
            replacements: [
                {
                    from: '"bootstrap/',
                    to: '"../3p/scss/bootstrap/'
                },
                {
                    from: '@import "../3p/scss/bootstrap/variables";',
                    to: '@import "masters/bootstrap-overrides";'
                }
            ]
        },

        overrides: {
            src: [ 'public_html/resources/3p/scss/bootstrap/_variables.scss' ],
            dest: [ 'public_html/resources/scss/masters/_bootstrap-overrides.scss' ],
            replacements: [ ]
        }
    },

    uglify: {
        options: {
            sourceMap: true
        },

        dist: {
            files: {
                'public_html/resources/js/compiled.js': [
                    dest + 'js/jquery.js',
                    dest + 'js/bootstrap.js'
                ]
            }
        }
    },

    watch: {
        options: {
            spawn: false
        },

        scripts: {
            tasks: "uglify",
            files: 'public_html/resources/js/*.js'
        }
    }
};


module.exports = function (grunt) {

    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-modernizr');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('default', ['bowercopy', 'replace:bootstrap', 'uglify']);
    grunt.registerTask('init', ['bowercopy', 'replace', 'uglify'])
};
