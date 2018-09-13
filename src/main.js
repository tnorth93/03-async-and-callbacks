'use strict';

const readFiles = require('./lib/reader');

const litanyPath = `${__dirname}/data/litany.txt`;
const ulyssesPath = `${__dirname}/data/ulysses.txt`;
const mobyDickPath = `${__dirname}/data/moby-dick.txt`;
const sherlockPath = `${__dirname}/data/sherlock.txt`;
const pridePath = `${__dirname}/data/pride-and-pred.txt`;

const fileArray = [litanyPath, sherlockPath, pridePath];

const CHARACTERS_TO_READ = 10;
const printString = (string) => {
  console.log(string);
};