# Page Object Loader

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




