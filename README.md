[![Build](https://img.shields.io/travis/sapbuild/Common.svg?style=flat-square)](http://travis-ci.org/sapbuild/Common)
[![Version](https://img.shields.io/npm/v/Common.svg?style=flat-square)](https://npmjs.org/package/Common)
[![Dependency Status](https://david-dm.org/sapbuild/Common.svg)](https://david-dm.org/sapbuild/Common)
[![devDependency Status](https://david-dm.org/sapbuild/Common/dev-status.svg)](https://david-dm.org/sapbuild/Common#info=devDependencies)
[![Coverage](https://img.shields.io/coveralls/sapbuild/Common/master.svg?style=flat-square)](https://coveralls.io/r/sapbuild/Common?branch=master)

[Norman Common](https://github.com/Norman/Common)
=============

##1/ Norman Client-Side Dependencies
This module provides a single point to include common/shared dependencies.

**<u>IMPORTANT:</u>** Please Do Not add to or Modify this module without prior approval from the Architecture team.

####Adding a Shared Dependency

To add  e.g. `angular.js` to the client **shared dependencies**:
- Add it to `peerDependencies` and to (`dependencies` or `devDependencies`) of the `client/package.json` file in this repository (remember to `npm publish` client or server folder afterwards)

`peerDependencies` will ensure that the dependency is installed in the root of the `node_modules` folder instead of the `node_modules` of your custom module.

e.g. `client/package.json`:

```json
{
    "peerDependencies": {
        "angular": "^1.3.3"
    },
    "dependencies": {
        "angular": "^1.3.3"
    }  
}
```

##2/ [Norman Common Server Components](server/README.md)
This collection of modules provide shared server services and management of shared dependencies for production and test environments  
