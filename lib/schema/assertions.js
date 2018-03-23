'use strict';

function invalidParameter(value, key) {
  return `Invalid option ${key}`;
}

function equals(expectedValue) {
  return (value, key) => {
    if (value !== expectedValue) {
      return `Expected option "${key}"=${value} to equal ${expectedValue}`;
    }
  };
}

function isType(expectedType) {
  return (value, key) => {
    const actualType = typeof value;
    if (actualType !== expectedType) {
      return `Expected typeof option "${key}"=${value} to equal ${expectedType}. but was ${actualType}`;
    }
  };
}

function isInstance(ctor) {
  return (value, key) => {
    if (!(value instanceof ctor)) {
      return `Expected option "${key}" to be instance of ${ctor}`;
    }
  };
}

module.exports = {
  isInstance,
  isType,
  equals,
  invalidParameter
};
