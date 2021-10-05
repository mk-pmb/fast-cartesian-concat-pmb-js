
<!--#echo json="package.json" key="name" underline="=" -->
fast-cartesian-concat-pmb
=========================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Calculate a small-ish list of combinations using `fast-cartesian`, then
concatenate each result.
<!--/#echo -->



API
---

This module exports one function:

### fastCartesianConcat(inputs)

Given an array `inputs` of arrays, determines all combinations
and concatenates each combination,
thus returning a flat list of combined items.



<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
