module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			js: {
				files: ['./js/es6/*.js'],
				tasks: ['eslint','babel:dev']
			},
			sass: {
				files: ['./css/sass/**/*.sass'],
				tasks: ['sass:dev']
			}
		},
		eslint: {
			options: {
				configFile: 'data/eslint.dev.json'
			},
			target: ['./js/*.js']
		},
		babel: {
			options: {
				presets: [
					'es2015',
					'react'
				]
			},
			dev: {
				options: {
					sourceMap: true
				},
				files: [{
					expand: true,
					cwd: './js/es6',
					src: ['*.js'],
					dest: './js/',
					ext: '.js'
				}]
			},
			build: {
				options: {
					sourceMap: false
				},
				files: [{
					expand: true,
					cwd: './js/es6',
					src: ['*.js'],
					dest: './public/js/',
					ext: '.js'
				}]
			}
		},
		sass: {
			dev: {
				options: {
					precision: 3,
					sourcemap: 'inline',
					style: 'expanded',
					trace: true,
					update: true
				},
				files: [{
					expand: true,
					cwd: './css/sass/',
					src: 'index.sass',
					dest: './css/',
					ext: '.css'
				}]
			},
			build: {
				options: {
					precision: 3,
					sourcemap: 'none',
					style: 'compressed',
					trace: true,
					update: false
				},
				files: {
					'public/css/main.css' : './sass/main.sass'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', []);
	grunt.registerTask('dev', ['watch']);
	grunt.registerTask('build', [])

}