'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var memFs = require('mem-fs');
var editor = require('mem-fs-editor');
var yosay = require('yosay');
var s = require("underscore.string");

var store = memFs.create();
var fs = editor.create(store);
var templateContext;

var CatenaGenerator = yeoman.generators.Base.extend({
  prompting: function(){
    var done = this.async();

    this.log(yosay('Hello, and welcome to the fantastic ' + chalk.cyan('catena') + ' generator!'));

    var prompts = [
      {
        name: 'appName',
        message: 'What is your app\'s name?'
      },
      {
        name: 'appEmail',
        message: 'What is the contact email for your app?'
      },
      {
        type: 'confirm',
        name: 'addDemoModule',
        message: 'Would you like to generate a demo module ?',
        default: true
        }
      ];

    this.prompt(prompts, function(props){
      this.props = props;

      this.appName = this.props.appName;
      this.appEmail = this.props.appEmail;
      this.addDemoModule = this.props.addDemoModule;

      this.convertedAppName = s(this.appName).humanize().classify().decapitalize().value();
      this.config.set('appName', this.convertedAppName);

      done();
    }.bind(this));
  },
  scaffoldProject: function(){
    var done = this.async();

    this.templateContext = {
      appName: this.convertedAppName,
      appEmail: this.appEmail
    };

    this.directory('.meteor', '.meteor');

    this.fs.copyTpl(
      this.templatePath('app/'),
      this.destinationPath('app/'),
      this.templateContext
    );

    this.fs.copyTpl(
      this.templatePath('tests/'),
      this.destinationPath('tests/'),
      this.templateContext
    );

    this.fs.commit(function(){
      done();
    });
  },
  generateDemoModule: function() {
      if (this.addDemoModule) {
          var done = this.async();
          this.invoke("catena-angular-meteor-material:demo-module", {args: ['']}, function(){
              done();
          });
      }
  }
});

module.exports = CatenaGenerator;
