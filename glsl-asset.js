const { Asset } = require('parcel-bundler');

module.exports = class GLSLAsset extends Asset {

  type = 'js';

  generate() {
    return { js: `module.exports = \`${ this.contents }\`;` };
  }

};
