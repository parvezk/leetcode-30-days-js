create-hello-world-function
counter
to-be-or-not-to-be
counter-ii
apply-transform-over-each-element-in-array
filter-elements-from-array
array-reduce-transformation
function-composition
return-length-of-arguments-passed
allow-one-function-call
memoize
add-two-promises
sleep
timeout-cancellation
interval-cancellation
promise-time-limit
cache-with-time-limit
debounce
execute-asynchronous-functions-in-parallel
is-object-empty
chunk-array
array-prototype-last
group-by
sort-by
join-two-arrays-by-id
flatten-deeply-nested-array
compact-object
event-emitter
array-wrapper
calculator-with-method-chaining
promise-pool
throttle
curry
json-deep-equal
convert-object-to-json-string

=======
Promise.all() vs Promise.allSettled()

┌───────────────────────────────────────────────────────────────────────────────┬─────────────────────────────────────┐
│ Situation │ Use │
├───────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────┤
│ All must succeed or the whole operation is meaningless │ Promise.all — fail fast, cut losses │
├───────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────┤
│ You want every result, success or failure (partial results are valuable) │ Promise.allSettled │
├───────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────┤
│ Loading 10 widgets on a dashboard, one API can fail without breaking the page │ Promise.allSettled │
├───────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────┤
│ Transactional multi-step work where any failure aborts │ Promise.all │
├───────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────┤
│ Fetching user + posts + settings and rendering whatever you got │ Promise.allSettled │
└───────────────────────────────────────────────────────────────────────────────┴─────────────────────────────────────┘

The full family, for context
┌────────────────────┬───────────────────────────────────────┬────────────────────────────────────┐
│ Method │ Fulfills when… │ Rejects when… │
├────────────────────┼───────────────────────────────────────┼────────────────────────────────────┤
│ Promise.all │ all fulfill │ any rejects (first one) │
├────────────────────┼───────────────────────────────────────┼────────────────────────────────────┤
│ Promise.allSettled │ all settle │ never │
├────────────────────┼───────────────────────────────────────┼────────────────────────────────────┤
│ Promise.race │ any settles first (fulfill OR reject) │ if first settled is a rejection │
├────────────────────┼───────────────────────────────────────┼────────────────────────────────────┤
│ Promise.any │ any fulfills │ all reject (throws AggregateError) │
└────────────────────┴───────────────────────────────────────┴────────────────────────────────────┘

Mental model: all and any are the strict ones (all-or-nothing). allSettled and race are the "just tell me what happened" ones.

The gotcha most people miss

Promise.all doesn't stop the other promises when one rejects — it just stops waiting for them. They keep running, may throw unhandled rejections, may do work you don't use. If you actually want to cancel, you
need AbortController plumbed into each task. The promise primitives themselves have no cancellation.
