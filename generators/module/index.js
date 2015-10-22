'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var memFs = require('mem-fs');
var editor = require('mem-fs-editor');
var isThere = require("is-there");
var s = require("underscore.string");
var gulp = require('gulp');
var insert = require('gulp-insert');
var eol = require('gulp-eol');
var yosay = require('yosay');

var store = memFs.create();
var fs = editor.create(store);

var templateContext;

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    var done = this.async();

    this.argument('moduleName', {
      required: true,
      type: String,
      desc: 'The modules name'
    });

    this.log(yosay('Creating new module...'));

    this.applicationName = this.config.get('appName');

    this.templateContext = {
      appName: this.applicationName,
      moduleName: s(this.moduleName).humanize().classify().value(),
      moduleNameDeCap: s(this.moduleName).humanize().classify().decapitalize().value()
    };

    done();
  },

  creatingModule: function () {
    var done = this.async();

    this.fs.copyTpl(
      this.templatePath('app/client/module/'),
      this.destinationPath('app/client/'+this.templateContext.moduleNameDeCap+'/'),
      this.templateContext
    );

    this.fs.copyTpl(
      this.templatePath('app/collections/module.js'),
      this.destinationPath('app/collections/'+this.templateContext.moduleNameDeCap+'.js'),
      this.templateContext
    );

    this.fs.copyTpl(
      this.templatePath('app/server/module.js'),
      this.destinationPath('app/server/'+this.templateContext.moduleNameDeCap+'.js'),
      this.templateContext
    );

    this.fs.copyTpl(
      this.templatePath('app/server/startup/load-module.js'),
      this.destinationPath('app/server/startup/load-'+this.templateContext.moduleNameDeCap+'.js'),
      this.templateContext
    );

    this.fs.copyTpl(
      this.templatePath('tests/jasmine/client/unit/module/config/routesTest.js'),
      this.destinationPath('tests/jasmine/client/unit/'+this.templateContext.moduleNameDeCap+'/config/routesTest.js'),
      this.templateContext
    );

    this.fs.copyTpl(
      this.templatePath('tests/jasmine/client/unit/module/controller/module.js'),
      this.destinationPath('tests/jasmine/client/unit/'+this.templateContext.moduleNameDeCap+'/controller/'+this.templateContext.moduleNameDeCap+'Test.js'),
      this.templateContext
    );

    this.fs.copyTpl(
      this.templatePath('tests/jasmine/client/unit/module/controller/module.js'),
      this.destinationPath('tests/jasmine/client/unit/'+this.templateContext.moduleNameDeCap+'/controller/'+this.templateContext.moduleNameDeCap+'Spec.js'),
      this.templateContext
    );

    this.fs.copyTpl(
      this.templatePath('tests/jasmine/server/integration/module/test.js'),
      this.destinationPath('tests/jasmine/server/integration/'+this.templateContext.moduleNameDeCap+'/'+this.templateContext.moduleNameDeCap+'Test.js'),
      this.templateContext
    );

    this.fs.copyTpl(
      this.templatePath('tests/jasmine/server/integration/module/test.js'),
      this.destinationPath('tests/jasmine/server/integration/'+this.templateContext.moduleNameDeCap+'/'+this.templateContext.moduleNameDeCap+'Spec.js'),
      this.templateContext
    );

    this.fs.copyTpl(
      this.templatePath('tests/nightwatch/walkthroughs/spec.js'),
      this.destinationPath('tests/nightwatch/walkthroughs/'+this.templateContext.moduleNameDeCap+'Spec.js'),
      this.templateContext
    );

    this.fs.commit(function(){
      done();
    });
  }
});
