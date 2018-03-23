'use strict';

class SchemaCompileError extends Error {
  constructor(key, value) {
    super(`Schema field ${key} has invalid value ${value}`);
    this.name = 'SchemaCompileError';
  }
}

class SchemaValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'SchemaValidationError';
  }
}

module.exports = {
  SchemaCompileError,
  SchemaValidationError
};
