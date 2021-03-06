jquery-sets
===========

set operations for jquery sets

## Install

Via bower as `jquery-sets`.

```sh
bower install --save jquery-sets
```

## Usage

Include on your page, after jQuery. Supports AMD.

You can now combine jQuery sets using set operations:

```js
$.union(/* ..., ... */);
$.intersect(/* ..., ... */);
$.difference(/* ..., ... */);
```

```js
$(/* ..., ... */).union(/* ..., ... */);
$(/* ..., ... */).intersect(/* ..., ... */);
$(/* ..., ... */).difference(/* ..., ... */);
```


The functions accept any selector, element, or object arguments supported by [`$()`](https://api.jquery.com/jQuery/).
They are also chainable.
