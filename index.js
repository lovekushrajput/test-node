let moment = require('moment');
let lodash = require('lodash');


// Print Date or Time in the following format:

// February 12th 2021, 12:54:12 pm
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

// Friday
console.log(moment().format('dddd'))

// Feb 12th 21
console.log(moment().format('MMM Do YY'))




// Check if the following date is valid or not:

// 2020-01-01
console.log(moment('2020-01-01').isValid())

// 2020-14-01
console.log(moment('2020-14-01').isValid())





// Manipulating Dates

// adds 7 days to current date
console.log(moment().add(7, 'days').calendar())

// adds 7 months to current date
console.log(moment().add(7, 'months').calendar())

// adds 7 years to current date
console.log(moment().add(7, 'years').calendar())

// subtracts 7 days to current date
console.log(moment().subtract(7, 'days').calendar())

// subtracts 7 months to current date
console.log(moment().subtract(7, 'months').calendar())

// subtracts 7 years to current date
console.log(moment().subtract(7, 'years').calendar())




// Find the difference between the following 2 dates:

// 1.

// date1: 2014-11-11
// date2: 2015-09-11

var date1 = moment([2014, 11, 11]);
var date2 = moment([2015, 09, 11]);
console.log(date1.diff(date2))

// 2.

// date1: 2014-11-27
// date2: 2015-09-16
var a = moment([2014, 11, 27]);
var b = moment([2015, 09, 16]);
console.log(a.diff(b))


// Check is 2020-01-01 date after 2018-01-01
console.log(moment('2020-01-01').isAfter('2018-01-01'))

// Check is 2010-01-01 date after 2018-01-01
console.log(moment('2020-01-01').isAfter('2018-01-01'))

// Check if the year 2019 is a leap year
console.log(moment([2019]).isLeapYear())

// Check if the year 2020 is a leap year
console.log(moment([2020]).isLeapYear())






//lodash five method of array

// 1-chunk method
// Creates an array of elements split into groups the length of size. If array can't be 
// split evenly,the final chunk will be the remaining elements.
let chracter = ['a', 'b', 'c', 'd','e','f','g']
console.log(lodash.chunk(chracter,2))

// 2-compact method
// Creates an array with all falsey values removed. The values false,
//  null, 0, "", undefined, and NaN are falsey.
let arr = [0, 1, false, 2, '', 3]
console.log(lodash.compact(arr))

// 3- concat method
// Creates a new array concatenating array with
//  any additional arrays and/or values.
let other = [1,2,3,4]
console.log(lodash.concat(other,67,[122],[[66]]))

// 4- drop method
// Creates a slice of array with n elements dropped from the beginning.
let array = [23,35,12,45]
console.log(lodash.drop(array,3))

// 5- indexOf method
// Gets the index at which the first occurrence of value is found in array using
// SameValueZero for equality comparisons. If fromIndex is negative, it's used
// as the offset from the end of array.
console.log(lodash.indexOf(array,35))


// lodash five method of collection
// 1- filter method
// Iterates over elements of collection, returning an array of all elements predicate
//  returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];

  console.log(lodash.filter(users,'active'))

  // 2- find method
//   Iterates over elements of collection, returning the first element predicate returns truthy for.
//  The predicate is invoked with three arguments: (value, index|key, collection).
console.log(lodash.find(users, ['active', false]))

// 3-forEach method
// Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with
//  three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
let arr2 = [1,2,3,4,5]
console.log(lodash.forEach(arr2, function(value) {
    console.log(value);
  }))

// 4- map method
// Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:
// (value, index|key, collection).
function square(n) {
    return n * n;
  }
   
  console.log(lodash.map(arr2, square));

// 5- shuffle method
// Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.
console.log(lodash.shuffle(arr2))