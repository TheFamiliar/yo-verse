# Yo, Verse

Over time at Verse, we've come up with our ways of doing things.

Whenever we're setting up a project, we like a certain folder structure. We like to use Bootstrap for rapid prototyping, and we have a certain way we organise Bootstrap's files. We use Bower to pull in client-side dependencies - followed swiftly by a Grunt task to make Bower bearable.

For simple projects, we found we were setting this up all the time - that's a lot of copy-and-paste.

So, we created a Yeoman generator, to help speed things up.


## Installation

Make sure you have Node.js and NPM installed.

If you don't have Yeoman installed already, you'll have to install it.

```
npm install -g yo
```

You can then load in our generator with:

```
npm install -g generator-verse
```

## Usage

To create a new site, simply `cd` to where you'd like the site to live, and run:

```
yo verse
```

The generator will ask you for the name of the site - this will become the folder name you set up (and if you're using our [Vagrant setup](https://github.com/kieranajp/ansible), it'll become your virtual host name, too). So if you input `verse` at the prompt, the following folder structure will be created:

```
verse
├── Gruntfile.js
├── bower.json
├── node_modules
│   
├── package.json
└── public_html
    ├── index.php
    └── resources
        ├── 3p
        │   ├── fonts
        │   ├── js
        │   └── scss
        ├── js
        │   ├── compiled.js
        │   └── compiled.js.map
        └── scss
            ├── _bootstrap.scss
            ├── masters
            │   └── _bootstrap-overrides.scss
            └── modules
```

This should look very familiar if you've ever worked with us :)

## Manual setup

In some cases you may want to manually install bootstrap et al in this way, but without using the script. This usually occurs when there are some subtle differences in the setup that the script doesn't cover (for example, you already have some site folder structure set up and don't want to nuke the whole thing).

See [MANUAL.md](https://github.com/withverse/yo-verse/blob/master/README.md) for more instructions on how to set things up manually, sans script.

