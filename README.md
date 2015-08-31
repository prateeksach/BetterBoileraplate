# BetterBP (AngularJS x Facebook Parse)

Yes, you read it right. It's BetterBoilerplate. Basically, very empty boilerplate right now.
Meant to be used for AngularJS x Facebook Parse projects. Everything will be documented
very soon.

Originally forked from [ngBoilerplate](https://github.com/ngbp/ngbp).

***

Stack Description
-----------------

Here are the front end technologies used: 

* [AngularJS](http://angularjs.org/) - Used for the entire frontend (single-page app)
* [Sass](http://sass-lang.com/) - Precompiler used instead of CSS (managed by Gulp below)
* [Parse](https://parse.com) - Replaces entire backend and server requirements

Here are the automation tools being used

* [Node.js](https://nodejs.org/) - Using Node Package Manager for system packages
* [Bower](http://bower.io/) - Bower Package Manager for web packages
* [Gulp](http://gulpjs.com) - Gulp automation tool to run dev environments

Setup Instructions
-----------------

Install [Node.js](https://nodejs.org/) and [Ruby](https://www.ruby-lang.org/en/documentation/installation/). 

Then, you need to run the following ONCE in order to install global packages like [gulp](http://gulpjs.com/) and [bower](http://bower.io/):

```sh
$ sudo npm -g install gulp bower
$ gem install sass
```

Next, run the following to set up the BetterBoilerplate repo.

```sh
$ git clone https://github.com/prateeksach/BetterBoilerplate
$ cd BetterBoilerplate
$ npm install
$ bower install
```

Development
-----------------

Follow this to start the development environment on your computer. It will automaically start a server and open your browser, in addition to having live-refresh to reflect all your changes in real-time. Everything is handled by gulp so look into that more if you're interested in how it all works.

```sh
$ npm start
```

Production
-----------------

Follow this to create a deployable version (minified and compressed) of the project. It may take up to a few minutes to run. Once it's done, look in the `build` folder to view the deployable files.

```sh
$ npm run build
```

File Structure
-----------------

Here is an overview of the file structure and brief introductions to folders:

```
BetterBoilerplate/
  |- build/
  |- node_modules/
  |- tasks/
  |- src/
  |  |- assets/
  |  |- css/
  |  |- js/
  |  |  |- controllers/
  |  |  |- directives/
  |  |  |- services/
  |  |  |- initialize.js
  |  |  |- routes.js
  |  |  |- templates.js
  |  |- scss/
  |  |  |- foundation/
  |  |  |- partials/
  |  |- templates/
  |  |  |- partials/
  |  |- vendor/
  |	 |- index.html
  |- .bowerrc
  |- bower.json
  |- gulpconfig.js
  |- gulpfile.js
  |- module.prefix
  |- module.suffix
  |- package.json
```
What follows is a brief description of each entry - browse around to learn more:

* `build/` - deployable folder created by `npm run build`. WARNING: Edits made in this folder will not persist.
* `node_modules/` - NPM modules (not synced to github, ignore)
* `tasks/` - gulp tasks for `npm start` and `npm run build` (don't need to edit unless you know what you're doing)
* `src/` - 
	* `assets/` - static files used across the app
	* `css/` - folder created by gulp scripts by compiling sass files. WARNING: Edits made in this folder will not persist (edit `scss` folder instead)
	* `js/` - 
		* `controllers/` - all page controllers (assigned in `routes.js`)
		* `directives/` - all custom directives
		* `services/` - all Parse models will be placed here
		* `initialize.js` - main app that requires all other modules (contains no actual code)
		* `routes.js` - URL scheme for the app
		* `templates.js` - file created by gulp scripts to conver the templates into a javascript file. WARNING: Edits made in this folder will not persist (edit `scss` folder instead)
	* `scss/` - contains all SCSS files (ideally, one file for each page)
		* `foundation/` - foundational files that apply to the entire app
		* `partials/` - CSS rules for partials and directives
		* `main.scss` - main SCSS file that requires all other libraries and files
	* `templates/` - all HTML-based templates used in the app (assigned in `routes.js`)
		* `partials/` - any templates for partials or directives
	* `vendor/` - third-party libraries. [Bower](http://bower.io) will install packages here.
	* `index.html` - main file the user sees but beware of the gulp inject regions. The file can be edited but do not change gulp regions.
* `.bowerrc` - the Bower configuration file. This tells Bower to install components into the `vendor/` directory.
* `bower.json` - this is our project configuration for Bower and it contains the list of Bower dependencies we need.
* `gulpconfig.js` - customizable build settings for gulp
* `gulpfile.js` - the gulp build script
- `module.prefix` and `module.suffix` - our compiled application script is wrapped in these, which by default are used to place the application inside a self-executing anonymous function to ensure no clashes with other libraries.
* `package.json` - metadata about the app, used by NPM and our build script. Our NPM dependencies are listed here.

Additional Notes
-----------------

* Whenever a Bower package is installed, it should be added to the `overrides` object in bower.json to select the `dev` and `prod` files (non-minified and minified). If you don't do this, every single JS file from the bower package will be included in the HTML.

* Remember structure. Create folders and group files wherever you see sit. For instance, if there is a resource URL (multiple children routes), then there should be a folder for the resource in `controllers/`, `templates/` and `scss/` folder to properly structure the repo.

* Keep a separation between the models and the controllers. The Parse API requests are made in the `services/` folder and they do not ever edit the front end. There should still be a middleman function in the `controllers/`  folder that is called by the View file and the function itself calls the Model file.