var generator = require('yeoman-generator'),
    mkdirp    = require('mkdirp');

module.exports = generator.Base.extend({

    askForName: function () {
        var done = this.async();

        this.prompt({
            type    : 'input',
            name    : 'name',
            message : 'What is the name of this new project?'
        }, function (answers) {
            this.name = answers.name;
            done();
        }.bind(this));
    },

    templates: function () {
        var copy = function (file, destination) {
            destination = (typeof destination === 'undefined') ? file : destination;

            return this.fs.copyTpl(
                this.templatePath(file),
                this.destinationPath(this.name + '/' + destination),
                { name: this.name }
            );
        }.bind(this);

        copy('package.json');
        copy('bower.json');
        copy('gitignore', '.gitignore');
        copy('Gruntfile.js');
        copy('index.php', 'public_html/index.php');
    },

    install: function () {
        process.chdir(this.name);

        this.installDependencies({
            callback: function () {
                mkdirp('public_html/resources/scss/modules');
                this.spawnCommand('grunt', ['init']);
            }.bind(this)
        });
    }

});
