// // The following variables are defined in the global scope
// const num1 = 20;
// const num2 = 3;
// const name = "Chamakh";

// // This function is defined in the global scope
// function multiply() {
//   return num1 * num2;
// }

// console.log(multiply()); // 60

// // A nested function example
// function getScore() {
//   const num1 = 2;
//   const num2 = 3;

//   function add() {
//     return `${name} scored ${num1 + num2}`;
//   }

//   return add();
// }

// console.log(getScore()); // "Chamakh scored 5"


// for (let i =0 ; i < 5 ; i++) {
//     setTimeout(function(){
//         console.log(i)
//     }, i * 1000);
// }


// for (var i =0 ; i < 5 ; i++) {
//     setTimeout(function(){
//         console.log(i)
//     }, i * 1000);
// }


// var x = 21


// var func = function () {
//     console.log(x)
//     var x = 100
// }

// func()


// const fn = (a,  x, y, ...numbers) => {
//     console.log(x, y, numbers)
// }

// fn(2, 5, 3 ,7, 7, 9, 5)

function func() {
    console.log(arguments)
}

func(2, 3, 5)

const func1 = function () {
    console.log(arguments)
}

func1(2, 3, 5)