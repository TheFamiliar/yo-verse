# Manual Site Setup

Sometimes you may wish to setup a site without using the generator.

To do this, perform the following steps:

1. Copy app/templates/package.json to your site's git root directory (e.g. above public_html). If your site has a package.json already, open up app/templates/package.json and copy the "devDependencies" section into the existing package.json. Replace all instances of `<%= name %>` within this file with your site's name.
2. Run `npm install` to install what's in the package.json (grunt and its modules).
3. Copy app/templates/bower.json (or its "dependencies" section if your project already has a bower.json) into your site's git root directory. Replace all instances of `<%= name %>` in this file with your site's name.
4. Copy app/templates/Gruntfile.js into the same place.
5. Run `grunt init`. This:
    - Runs Bower, which downloads Bootstrap from Git and places it in a bower_components folder
    - Copies just the files we want from Bootstrap into sensible locations
    - Deletes the remaining junk in the bower_components folder
    - Compiles Bootstrap's javascript
6. Ensure your .gitignore file is up to date before committing, as a lot of the files that will have been pulled down should be deleted.
