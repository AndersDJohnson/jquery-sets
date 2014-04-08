test("union", function() {
  equal($.union('.a').length, 1);
  equal($.union('.b').length, 2);
  equal($.union('.a', '.b').length, 3);
  equal($('.a').union('.b').length, 3);
});

test("intersect", function() {
  equal($.intersect('.a').length, 1);
  equal($.intersect('.b').length, 2);
  equal($.intersect('.b', '.z').length, 1);
  equal($('.b').intersect('.z').length, 1);
});

test("difference", function() {
  equal($.difference('.b').length, 2);
  equal($.difference('.b', '.none').length, 2);
  equal($.difference('.b', '.z').length, 1);
  equal($.difference('.b, .z').length, 3);
  equal($.difference('.b, .z', '.none').length, 3);
  equal($('.b').difference().length, 2);
  equal($('.b').difference('.none').length, 2);
  equal($('.b').difference('.z').length, 1);
  equal($('.b, .z').difference('.none').length, 3);
});

