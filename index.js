let glob = require("glob");
let _ = require('lodash');

glob("**/*.page.js", {
  nonull: true
}, (er, filePaths) => {
  let pages = {};
  filePaths.forEach((filePath) => {
  	let fileName = filePath.split(/(\\|\/)/g).pop(); // extract file name with extension
  	let pageName = _.camelCase(fileName.split('.', 1)[0]); // create the file name pieces and take the first which is the name and format it
    let pageObjectName = pageName.charAt(0).toUpperCase() + pageName.slice(1); // make the file name match the name of the page object function or class
    pages[pageObjectName] = require(`./${filePath}`);
  });

  let welcome = new pages.Welcome();

  console.log('pages', pages);
  console.log('welcome page', welcome);
  console.log('wecome function', welcome.getWelcomeMsg());
});