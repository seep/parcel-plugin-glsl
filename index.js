module.exports = function (bundler) {

  bundler.addAssetType('glsl', require.resolve('./GLSLAsset.js'));

};
