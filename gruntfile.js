module.exports = function(grunt) {
	
    var taskConfig = {
        war: {
            target: {
                options: {
                    war_verbose: true,
                    war_dist_folder: 'build',           // Folder path seperator added at runtime. 
                    war_name: 'basicui',                // .war will be appended if omitted 
                    webxml_welcome: 'index.html',
                    webxml_display_name: 'Grunt WAR'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'app',
                        src: ['**'],
                        dest: ''
                    }
                ]
            }
        }};
 
    grunt.initConfig( taskConfig );
	grunt.loadNpmTasks('grunt-war');
	grunt.registerTask('default', ['war']);

};