function fib() {
  // Some variables here
  // var initial = 0;
  var two_ahead = 0;
  var one_ahead = 1;
  var curr = 1;
  function nacci() {
    // do something to those variables here
    console.log('in nacci');
    // let curr = 1;
    console.log(curr);
    curr = two_ahead + one_ahead;
    two_ahead = one_ahead;
    one_ahead = curr;
  }
  return nacci;
}
var fibCounter = fib();
fibCounter(); // should console.log "1"
fibCounter(); // should console.log "1"
fibCounter(); // should console.log "2"
fibCounter(); // should console.log "3"
fibCounter(); // should console.log "5"
fibCounter(); // should console.log "8"
