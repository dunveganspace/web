This is the repository for Dunvegan Space Systems website.  It uses [ngBoilerplate](http://joshdmiller.github.com/ng-boilerplate) as a starting point, thus the frameworrk for future development has been laid. Some of the remainder of this readme file is partially copied+editted from the ngBoilerplate readme, in order to explain the structure and tools used.

***

## Quick Start

Install Node.js and then:

```sh
$ git clone https://github.com/dunveganspace/web
$ cd DunveganSpaceServices
$ sudo npm -g install grunt-cli karma bower
$ npm install
$ bower install
$ grunt
```

Finally, open `file:///path/to/DunveganSpaceServices/bin/index.html` in your browser.

A note about Grunt:  Grunt is the build tool that assembles all the files in the src/ folder into the build and compiled versions.  `grunt` will compile all the files, minify them for production, and create the final version ready in the `/bin/` folder.  `grunt watch` is for development - it monitors the `/src/` folder for changes, and when triggered it automatically rebuilds the files in `/build/` (non-minified, quicker-to-assemble, better for debugging).

## ngBoilerplate (from the ngBP readme)

`ngBoilerplate` is designed to make life easy by providing a basic framework
with which to kickstart AngularJS projects. It contains a best-practice
directory structure to ensure code reusability and maximum scalability.
ngBoilerplate also comes prepackaged with the most popular design frameworks
around: [Twitter Bootstrap](http://getbootstrap.com),
[Angular UI](http://angular-ui.github.io),
[Angular Bootstrap](http://angular-ui.github.io/bootstrap),
[Font Awesome](http://fortawesome.github.com/Font-Awesome), and
[LESS](http://lesscss.org). Lastly, it contains a sophisticated
[Grunt](http://gruntjs.org)-based build system to ensure maximum productivity.
All you have to do is clone it and start coding!

### Overall Directory Structure

At a high level, the structure looks roughly like this:

```
DunveganSpaceServices/
  |- grunt-tasks/
  |- karma/
  |- src/
  |  |- app/
  |  |  |- <app logic>
  |  |- assets/
  |  |  |- <static files>
  |  |- common/
  |  |  |- <reusable code>
  |  |- less/
  |  |  |- main.less
  |- vendor/
  |  |- angular-bootstrap/
  |  |- bootstrap/
  |  |- placeholders/
  |- .bowerrc
  |- bower.json
  |- build.config.js
  |- Gruntfile.js
  |- module.prefix
  |- module.suffix
  |- package.json
```

- `karma/` - test configuration.
- `src/` - our application sources. [Read more &raquo;](src/README.md)
- `vendor/` - third-party libraries. [Bower](http://bower.io) will install
  packages here. Anything added to this directory will need to be manually added
  to `build.config.js` and `karma/karma-unit.js` to be picked up by the build
  system.
- `.bowerrc` - the Bower configuration file. This tells Bower to install
  components into the `vendor/` directory.
- `bower.json` - this is our project configuration for Bower and it contains the
  list of Bower dependencies we need.
- `build.config.js` - our customizable build settings; see "The Build System"
  below.
- `Gruntfile.js` - our build script; see "The Build System" below.
- `module.prefix` and `module.suffix` - our compiled application script is
  wrapped in these, which by default are used to place the application inside a
  self-executing anonymous function to ensure no clashes with other libraries.
- `package.json` - metadata about the app, used by NPM and our build script. Our
  NPM dependencies are listed here

Note: For now, I have left the readme.md files in the various folders that were there from the ngBp.  These readmes explain the purpose of each folder more clearly.  Over time I imagine they will be removed, but I leave them in for now so that the information is easily accessible so you can familiarize yourself with the structure.
