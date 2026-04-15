//! PRINTING STATEMENTS

// console.log("External JS"); // (MOST USED)
// document.write("Hello"); // DEPRECATED
// document.writeln("Byee"); // DEPRECATED

//! TOKENS : smallest unit of any programming lang.
// there are 4 types:-
// 1) keywords : reserved words which specific meaning. ex- for,let,var,const...

// 2) identifier : name given to a variables, functions, class etc

// 3) literals : values stored in a variable

// 4) operators : symbol whoch is used to perform some operation on operands

//! DATATYPES
// there are 2 types

//! Primitive - immutable - call by value
// 1) number
// 2) string
// 3) boolean
// 4) undefined
// 5) null
// 6) bigint
// 7) symbol

//! Non-Primitive - mutable - call by reference
// 1) object
// 2) array
// 3) function

//! EXAMPLE OF MUTABLE AND IMMUTABLE
var str = "Hello";
str[0] = "A";
console.log(str);

var arr = [10, 20, 30];
arr[0] = 100;
console.log(arr);
