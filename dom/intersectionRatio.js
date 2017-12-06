const mezr = require('mezr');

module.exports = (function(window, document, undefined) {

  /**
   * Calculate the intersection area between the window and an on-screen element.
   * @see https://github.com/niklasramo/mezr/
   * @see https://hacks.mozilla.org/2017/08/intersection-observer-comes-to-firefox/
   * @param  {Element}  el  Element to check
   * @return {Number}       2-decimal value between 0 and 1
   */
  function intersectionRatio(el) {
    let intersection = mezr.intersection(window, el);

    if (!intersection) {
      return 0;
    }

    return ((intersection.width * intersection.height) / (el.offsetWidth * el.offsetHeight)).toFixed(2);
  }

  return intersectionRatio;

})(window, document);
