# coffeetime.io

Simple two-page site for the CoffeeTime app from Esri PDX.

## Contents

* `source` - Files that need to be compiled (sass, markdown, handlebars)
* `build` - Files that don't need to be compiled (html, images, fonts) and files built from `source`

## Install

```bash
# we use sass & compass for css compilation
gem install compass

# we use node & grunt for task running
npm install
npm install -g grunt-cli
```

## Develop

```bash
grunt # this will build files from source, start a server at localhost:8080, and watch for changes in source
```
## Build

```bash
grunt build
```

