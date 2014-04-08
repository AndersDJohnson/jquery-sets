test( "hello test", function() {
  equal($.join('.a').length, 1);
  equal($.join('.b').length, 2);
  equal($.join('.a', '.b').length, 3);
});
