module.exports = function( grunt ) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				//separator: ';',
			},
			dist: {
				src: [
					'js/templates.js',
					'js/vendor/*.js',
					'js/components/**/model/*.js',
					'js/components/**/collection/*.js',
					'js/components/**/view/*.js',
					'js/AppView.js',
				],
				dest: 'compiled.js',
			},
		},

		sass: {
		    dist: {
				options: {
					style: 'compressed'
				},
				files: {
		        	'compiled.css': 'scss/compiled.scss',
				}
			}
		},

		jst: {
			compile: {
				options: {
					templateSettings: {
						variable : 'data'
					},
					namespace: "App",
					processName: function(filepath) {
    					var fmtFilepath = filepath.split( '/' ) .pop(); 
    					return fmtFilepath.substr( 0, fmtFilepath.lastIndexOf( '.' ) );
  					}
				},
				files: {
					"js/templates.js": "js/components/**/template/*.html"
				}
			}
		},

		autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 9']
            },
            no_dest: {
                src: 'compiled.css'
            }
        }

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jst');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default', [
		'jst',
		'concat',
		'sass',
		"autoprefixer"
	]);

};