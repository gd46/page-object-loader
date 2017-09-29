# Page Object Loader

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Install

```
npm install page-object-loader
```

## Goals

To dynamically require page objects any where in a project. 

## Format

This page object loader will return an object with the following pattern: 

```javascript
pages = {
	pageName : require(path)
}
```

This also enforces page object names to follow the following patterns: 
1. First letter must be capital
2. Page name must be camel case
3. No need to hage page as apart of the name

### Examples

#### Good Examples

```
function Example () {
	
}

function ExampleTest () {
	
}
```


#### Bad Examples

```
function ExamplePage () {
	
}

function examplePage () {
	
}

function example () {
	
}
```




