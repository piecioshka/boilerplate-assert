import { strict as assert } from "assert";

import { Example } from "../src/example.js";

// sync
const o1 = new Example();
assert.equal(o1.sync(), "sync");

// asyncCallback
const o2 = new Example();
o2.asyncCallback((value) => {
  assert.equal(value, "asyncCallback");
});

// asyncPromise
(async function () {
  const o3 = new Example();
  const value = await o3.asyncPromise();
  assert.equal(value, "asyncPromise");
})();
