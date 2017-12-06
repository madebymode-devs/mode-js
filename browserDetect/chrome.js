module.exports = (function(window, document, undefined) {

  /**
   * Returns the version of Chrome or `-1`.
   * @see https://stackoverflow.com/a/4900484/1786459
   * @return {Number}
   */
  function getVersion() {
    var version = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);

    return version ? parseInt(version[2], 10) : -1;
  }

  return {
    version: getVersion
  };

})(window, document);
