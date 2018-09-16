#Async and Callbacks
[![Build Status](https://travis-ci.com/tnorth93/03-async-and-callbacks.svg?branch=master)](https://travis-ci.com/tnorth93/03-async-and-callbacks)

In the lib/ directory create a reader.js module that exports a single function. The reader module should take an array of three file paths and resolve a mapped array of strings loaded from each file using an error-first callback. The string data should be in the same order as the file path data (mapped). If an error occurs, it should immediately reject the error using the callback and stop execution.

The file reader module should have the function signature (paths, callback) => undefined
On failure, the file reader module should invoke the callback with an error callback(error)
On success, the file reader module should invoke the callback with null as the first parameter and the result as the second parameter - callback(null, result)

### Module
There is one function included with the module. It reads an array of three filepaths and returns an array containing the data in those filepaths in the order that they are called. The function takes in two arity. The array of 3 filepaths and the callback.

### Setup
- Fork repo, clone to local machine
- npm i in terminal to install necessary packages
- Create a file in lib folder that will be exported (module), create method for module to be exported that reads files
- Create a test file in \__test__ folder to test the module
- Once test file is written, npm run test in terminal to execute