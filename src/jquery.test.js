/*
 * test
 * https://github.com/drjova/test
 *
 * Copyright (c) 2014 Harris Tzovanakis
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.test = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.test = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.test.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.test.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].test = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
