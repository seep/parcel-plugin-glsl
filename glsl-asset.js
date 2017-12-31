const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');

module.exports = class GLSLAsset extends HTMLAsset {

  constructor(name, pkg, options) {

    super(name, pkg, options);
    this.type = 'js';

  }

  parse(code) {

    return super.parse(code);

  }

  generate() {

    return { js: `module.exports = \`${ this.contents }\`` };

  }

};
