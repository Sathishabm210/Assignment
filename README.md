# CircuitBreaker 
Step 1 - Create an "action" function:
  - simple async function that simulates http call,
  - fails randomly with timeout,
  - can use promises, timeouts, etc, 
  - throw a custom error when failed.

Step 2 - Create a "CircuitBreaker" class:
  - constructor should accept "action" function as a parameter,
  - expose public method called "fire" that will call "action" function with passed parameters,
  - internally increment failures and successes statistics

Step 3 - Stress test "CircuitBreaker" instance:
  -  initialize circuit breaker instance, provide an "action" to it,
  -  sequentially call fire (at least 1000 times),
  -  print circuit breaker's statistics (counters)



## Methods

`fire` - This method simulates HTTP call.
`success` - To log Success message and count
`fail` - To log Failure message and count

## Usage

Run **circuitBreaker.js** by executing below command
```
node circuitBreaker
```

