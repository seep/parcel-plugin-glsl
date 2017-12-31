const RawAsset = require('parcel-bundler/src/assets/RawAsset');

module.exports = class GLSLAsset extends RawAsset {

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
