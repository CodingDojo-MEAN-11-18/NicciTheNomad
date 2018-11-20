function each(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}

const stringArray = [1, 5, 'hello', 2, 3, 'ray'];
each(stringArray, function(element, index) {
  console.log(`${element} and ${index}`);
});

each([1, 5, 'hello', 2, 3, 'ray'], function(num) {
  console.log(num + ' from the callback');
});

each(stringArray, listItem);
function listItem(item) {
  console.log(item);
}

function map(array, callback) {
  const results_array = [];
  for (let i = 0; i < array.length; i++) {
    results_array.push(callback(array[i], i));
  }
  return results_array;
}
//the results on the following line exists globally
let results = map(stringArray, function(element, i) {
  return parseInt(element, 10);
});
console.log(results);

function filter(array, callback) {
  //below was results_array_filter
  const results_array_filter = [];
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      // console.log(typeof(array[index]));
      //below was results_array_filter
      results_array_filter.push(array[index]);
    }
  }
  //below was results_array_filter
  return results_array_filter;
}
//below was results_array_filter
results_array_filter = filter(results, function(element) {
  console.log(!isNaN(element));
  //if this is true, we accept the value into the array
  return !isNaN(element);
});
//below was results_array_filter
console.log(results_array_filter);

function reject(array, callback) {
  const results = [];
  for (let index = 0; index < array.length; index++) {
    if (!callback(array[index], index)) {
      results.push(array[index]);
    }
  }
  return results;
}
results = reject(results, function(element) {
  console.log(isNaN(element));
  return isNaN(element);
});
console.log(results);

results_array_filter = filter(results, function(element) {
  return element % 2 === 0;
});
console.log('filtered even: ' + results_array_filter);

function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    //conditional with result of "callback"
    if (callback(array[i], i)) {
      return array[i];
    }
  }
}

console.log(
  find(results, function(element) {
    return element === 1;
  })
);

var _ = {
  map: function() {},
};
