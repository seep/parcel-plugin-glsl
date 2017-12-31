const Asset = require('parcel-bundler/src/Asset');

module.exports = class GLSLAsset extends Asset {

  generate() {

    return { js: `module.exports = \`${ this.contents }\`` };

  }

};
