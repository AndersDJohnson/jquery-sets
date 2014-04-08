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

  $.union = function () {
    var args = slice.call(arguments);

    var $set = $();

    $.each(args, function (i, arg) {
      $set = $set.add(arg);
    });

    return $set;
  };

  $.fn.union = function () {
    var args = slice.call(arguments);
    args = args.concat(this.toArray());
    return $.union.apply(null, args);
  };

  $.intersect = function () {
    var args = slice.call(arguments);

    var sets = [];

    var $intersect = $();

    $.each(args, function (i, arg) {
      var $set = $(arg);
      sets.push($set);
    });

    $.each(sets, function (i, $set) {
      $set.each(function (j, el) {
        var keep = true;
        $.each(sets, function (j, $otherSet) {
          keep = keep && $otherSet.filter(el).length > 0;
        });
        if (keep) {
          $intersect = $intersect.add(el);
        }
      });
    });

    return $intersect;
  };

  $.fn.intersect = function () {
    var args = slice.call(arguments);
    var args = args.concat(this);
    return $.intersect.apply(null, args);
  };

}));
