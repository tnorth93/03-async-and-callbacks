'use strict';

const reader = require('../lib/reader.js');

const firstPath = `${__dirname}/../data/one.txt`;
const secondPath = `${__dirname}/../data/two.txt`;
const thirdPath = `${__dirname}/../data/three.txt`;
const fourthPath = `${__dirname}/../data/four.txt`;
const filePathArray = [firstPath, secondPath, thirdPath];

describe('#reader.js', () => {
  describe('ordered array test', () => {
    test('All 3 files should be read in order', () => {
      reader.readFilesNCharactersAsync(filePathArray, (data) => {
        expect(data).toEqual(['first text to read', 'second text to read', 'third text to read']);
      });
    });
  });
  describe('array test', () => {
    test('Ensure that an array is returned rather than a string', () => {
      reader.readFilesNCharactersAsync(filePathArray, (data) => {
        expect(data).toBeType('array');
      });
    });
  });
  describe('error test', () => {
    test('Throw an error if a file cannot be read', () => {
      filePathArray.push(fourthPath);
      reader.readFilesNCharactersAsync(filePathArray, (error) => {
        expect(error).toEqual(error);
      });
    });
  });
});
