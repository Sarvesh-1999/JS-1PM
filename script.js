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
// var str = "Hello";
// str[0] = "A";
// console.log(str); // Hello

// var arr = [10, 20, 30];
// arr[0] = 100;
// console.log(arr); // [100, 20, 30]

//! PRIMITIVE DATA TYPES
// var n1 = 10.9;
// console.log(n1); // 10.9
// console.log(typeof n1); // number
// console.log(typeof typeof n1); // string

// var n2 = "Hello world";
// console.log(n2); // Hello world
// console.log(typeof n2); // string

// var n3 = true;
// console.log(n3); // true
// console.log(typeof n3); // boolean

// var n4;
// console.log(n4); // undefined (default value assigned by js-engine)
// console.log(typeof n4); // undefined

// //! INTERVIEW QUESTION -> what is the diff between undefined and not defined ?
// /*
// undefined is a literal which is assigned by the js-engine to variables if the varible is not initialized

// Not defined is a reference error occured when a variable is not present or declared

// var x;
// console.log(x); // ud

// console.log(y); // Reference err: not defined
// */

// //! INTERVEIW QUE -> Diff between null and undefined?
// // null:- when developer intentionally wants to keep a variable empty
// // undefined:- default value provided by js-engine

// var n5 = null;
// console.log(n5); // null
// console.log(typeof n5); // object

// // (-2^53 - 1) to (2^53 - 1)
// var n6 = 9n;
// console.log(n6);
// console.log(typeof n6);

// var n7 = Symbol("Hello");
// var n8 = Symbol("Hello");
// console.log(n7); // Symbol(Hello)
// console.log(n8); // Symbol(Hello)
// console.log(typeof n7); // symbol

// console.log(n7 == n8); // loosely comparison
// console.log(n7 === n8); // strictly comparison

// console.log(10 == "10"); // true
// console.log(10 === "10"); // false

// //! NON-PRIMITIVE DATATYPES

// var arr = [10, 20, 30];
// console.log(arr); // [10,20,30]

// var obj = { name: "John", age: 20 };
// console.log(obj);

// function demo() {
//   console.log("I am demo");
// }
// demo()

//! WAYS TO CREATE A VARIABLE -> 3 Ways -> var,let,const

// var a1;
// console.log(a1); // ud

// a1 = 10;
// console.log(a1); // 10

// var b1 = 20;
// console.log(b1); // 20

// var b1 = 40;
// console.log(b1); // 40

// let x1;
// console.log(x1); // ud

// x1 = 100;
// console.log(x1); // 1000

// let x2 = 200;
// console.log(x2); // 200

// // let x2 = 100 //!NOT POSSIBLE

// x2 = 900;
// console.log(x2); // 900

// // similar to "final" keyword in java
// const data = "John doe";

//! HOISTING : moving declaration part at the top of the original code internally by js-engine

//! TEMPORAL DEAD ZONE : timeperiod of accessing let/const variable before initialization

// var a = undefined <-- hoisting
// console.log(a);// ud
// var a = 10;
// console.log(a);// 10

// // const b;  <-- Temporal Dead Zone (TDZ)
// // console.log(b);//! Cannot access 'b' before initialization
// const b = 20;
// console.log(b); // 20

//! TYPES OF VARIABLE -> 2 Types
//! SCOPES OF VARIABLE -> 5 Types

//! 1) GLOBAL VARIABLES : which can be accessed anywhere thougout the code.
//! 2) LOCAL VARIABLES : which can be accessed within a block

// var a = 10; // global variable - global scope
// let b = 20; // global variable - script scope
// const c = 30; // global variable - script scope

// // console.log(a);
// // console.log(b);
// // console.log(c);

// if (100 > 2) {
//   var a = 10; // global variable - global scope
//   let b = 20; // local variable - block scope
//   const c = 30; // local variable - block scope
// }
// console.log(a); // 10 <-- due to global scope

// function demo() {
//   var x = 100; // local variable - local / function scope
//   let y = 200; // local variable - local / function scope
//   const z = 3000; // local variable - local / function scope
// }
// demo()

//! GEC -> Global Execution Context
// it has 2 phases
// 1) Declaration Phase
// 2) Execution Phase

// debugger;
// console.log("Start");
// console.log(a);
// var b;
// console.log(b);
// let x;
// console.log(x, b);
// var a = 100;
// x = 40;
// console.log(a, x);
// const z = 1000;
// a = 20;
// console.log(a, x, b);
// console.log("End");

//! FUNCTIONS :
// There are 10 types of functions:

//! 1) Named Function : a function which has name
//! NOTE: function hoisting is ONLY possible in named function

// greet(); // <--- due to function hoisting

// function greet() {
//   // function declaration
//   console.log("I am Named Function");
// }

// greet(); // <--- function call

//! GEC using Named Function
// console.log("Start");
// console.log(a);
// function Demo() {
//   console.log("I am demo");
// }
// console.log(Demo);
// var a;
// Student();
// a = 100;
// function Student() {
//   let fullname = "John Doe";
//   console.log(fullname);
// }
// Demo();
// console.log(a);
// console.log("End");

//! EXAMPLE 2
// console.log("Start");
// greet();
// let a = 20;
// console.log(b);
// function greet() {
//   var a = 100;
//   console.log(a);
// }
// var b = 30;
// function demo() {
//   const c = 30;
//   console.log(c);
// }
// a = 90;
// demo();
// console.log("End");

//! 2) ANONYMOUS FUNCTION : function without name
// function (){}

//! 3) FUNCTION EXPRESSION : used to call anonymous function
// const a1 = function () {
//   console.log("I am Function expression");
// };

// a1();

//! 4) PARAMETRIZED FUNCTION
// n1 and n2 are parameters
function sum(n1 = 0, n2 = 0) {
  console.log(n1 + n2);
}
sum(10, 20); // here 10 and 20 are arguements

sum(100);
