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

  var toSets = function (args) {

    // if (args && !$.isArray(args[0])) {
    //   args = slice.call(arguments);
    // }

    var sets = [];

    $.each(args, function (i, arg) {
      var $set = $(arg);
      sets.push($set);
    });

    return sets;
  };

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

    var sets = toSets(arguments);

    var $intersect = $();

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

  $.difference = function () {

    var sets = toSets(arguments);

    var $difference = $();

    if (sets.length === 0) {
      return $difference;
    }

    var $first = sets.shift();

    if (sets.length === 0) {
      return $first;
    }

    $difference = $difference.add($first);

    $.each(sets, function (i, $set) {
      $set.each(function (i, el) {
        $difference = $difference.not(el);
      })
    });

    return $difference;
  };

  $.fn.difference = function () {
    var args = slice.call(arguments);
    var args = [this].concat(arguments);
    return $.difference.apply(null, args);
  };

}));
