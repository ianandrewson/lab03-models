PR Link: https://github.com/ianandrewson/lab03-models/pull/1

# lab03-models

LAB: Models

This is the last lab in a three day series about schema and schema validation. For this lab, you’ll use Jest to test a file system functions and a Model class.
Before you begin

Refer to Getting Started in the lab submission instructions for complete setup, configuration, deployment, and submission instructions.
Getting Started

In the starter_code folder there is a completed version of yesterdays lab. You can use the starter_code or use the code you worked on yesterday. In either case, take a look at the started_code and compare it to your code from yesterday.
Requirements

    file system functions
    Model class

File System Functions

    mkdirp - make a directory and all parent directories
    writeJSON - write an object to a file
    readJSON - read an object from a file
    readDirectoryJSON - read all files in a directory as objects
    updateJSON - update a files JSON
    deleteFile - delete a file

Testing
These tests will be asynchronous tests. Since we’ll be writing to the file system for these tests, we’ll want to make sure we clean up our mess inside of an afterAll or afterEach. Also, do any setup inside of a beforeAll or beforeEach

Implementation
Use fsPromises (const fs = require('fs').promises) to write your functions. When writing JSON make sure to JSON.stringify (we can only write strings into files). When reading JSON make sure to JSON.parse.

NOTE it’s ok if readDirectoryJSON returns an array of objects in a different order each time

Model class

    create
    findById
    find
    findByIdAndUpdate
    findByIdAndDelete

Testing

Mock your File System Functions. Ensure that you invoke the right File System Functions with expect(fsFunction).toHaveBeenCalledWith(). Make sure that the right arguments are passed.
Implementation

Use your File System Functions to interact with the File System. Whenever a new Model is created make a directory to save files to. Whenever a new item is created create a random id using uuid.