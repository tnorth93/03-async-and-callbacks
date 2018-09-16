'use strict';

const fs = require('fs');

const reader = module.exports = {};
const firstPath = `${__dirname}/../data/one.txt`;
const secondPath = `${__dirname}/../data/two.txt`;
const thirdPath = `${__dirname}/../data/three.txt`;

const filePathArray = [firstPath, secondPath, thirdPath];

reader.readFilesNCharactersAsync = (filePath, callback) => {
  const mappedArray = [];
  fs.readFile(filePathArray[0], (error, data) => {
    if (error) {
      callback(error);
    }
    mappedArray.push(data.toString('utf8'));

    fs.readFile(filePathArray[1], (error2, data2) => {
      if (error) {
        callback(error2);
      }
      mappedArray.push(data2.toString('utf8'));
      fs.readFile(filePathArray[2], (error3, data3) => {
        if (error) {
          callback(error3);
        }
        mappedArray.push(data3.toString('utf8'));
        if (mappedArray[2]) {
          callback(mappedArray);
        }
      });
    });
  });
};

// reader.readFilesNCharactersAsync(filePathArray[2], (data) => {
//   console.log(data.toString('utf8'));
//   return data.toString('utf8');
// });
