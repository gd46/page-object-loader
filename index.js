let glob = require("glob");
let _ = require('lodash');


// options is optional
glob("**/*.page.js", (er, filePaths) => {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
  console.log('filePaths', filePaths);
  filePaths.forEach((filePath) => {
  	let fileName = filePath.split(/(\\|\/)/g).pop();
  	let pageNameArray = fileName.split('.', 1);
  	let pageName = pageNameArray[0];
  	let camelCasePageName = _.camelCase(pageName);
  	console.log(camelCasePageName.charAt(0).toUpperCase() + camelCasePageName.slice(1));
  });
});