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

    this.log(yosay('Creating tweet module...'));

    this.templateContext = {
      appName: this.config.get('appName')
    };

    done();
  },

  creatingTweetModule: function () {
    var done = this.async();

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
  }
});
