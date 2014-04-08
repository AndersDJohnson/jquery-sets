(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {

  var slice = Array.prototype.slice;

  $.fn.join = function () {
    var args = slice.call(arguments);

    var $this = $(this);
    var items = args.concat($this);

    return $.join(items)
  };

  $.join = function () {
    var args = slice.call(arguments);

    var $set = $();

    $.each(args, function (i, arg) {
      $set = $set.add(arg);
    });

    return $set;
  };

}));
