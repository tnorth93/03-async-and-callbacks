'use strict';

const fs = require('fs');

const reader = module.exports = {};

reader.readFiles = (paths, characters, callback) => {
  return fs.readFile(files, (error, data) {
    if (error) {
      console.log('there was an issue reading the files');
      console.log(error);
      return error;
    }
    return callback(data.toString, 'utf8', 0, characters);
  });
}