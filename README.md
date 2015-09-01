[Norman Common](https://github.wdf.sap.corp/Norman/Common)
=============

[![Build Status](https://build-jenkins.wdf.sap.corp/jenkins/buildStatus/icon?job=Common-master)](https://build-jenkins.wdf.sap.corp/jenkins/job/Common-master/)


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

##Make a Contribution
Click here to view our [Contribution](https://github.wdf.sap.corp/Norman/Norman/blob/master/Contributing.md) document.


##2/ [Norman Common Server Components](server/README.md)
This collection of modules provide shared server services and management of shared dependencies for production and test environments  
