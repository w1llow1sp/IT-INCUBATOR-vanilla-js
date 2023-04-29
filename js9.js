// замыкание, лексическое окружение, рекурсия

// globalLE {startEngine: Function } --> null

// let car = 'bmw';
// car = 'audi' // globalLE {startEngine: Function, car: 'audi' } --> null
// function startEngine() {
//   //[[envrinment]] --> globalLE
//   //startEngineLE {}
//   // const car = 'audi'; //startEngineLE {car: 'audi'}
//   return () => {
//     //[[envrinment]] --> startEngineLE
//     //foo{}
//     console.log(`Start ${car}`);
//   };
// }

// const foo = startEngine();

// foo();

// globalLE {counter: Function } --> null

// const counter = () => {
//   //[[environment]] --> globalLE
//   //counter1LE {}
//   //counter2LE {}
//   let i = 0;
//   return () => {
//     //[[environment]] --> counter1LE
//     //[[environment]] --> counter2LE
//     console.log(++i);
//   };
// };

// const count1 = counter();
// // globalLE {counter: Function, count1: Function } --> null
// const count2 = counter();
// // globalLE {counter: Function, count1: Function, count2: Function } --> null

// count1(); //1
// count1(); //2
// count1(); //3

// count2(); //1
// count2(); //2
// count2(); //3

// const thunkCreator = (userID) => {
//   const thunk = (dispatch, state) => {
//     console.log(userID)
//   }
//   return thunk
// }

// const thunk1 = thunkCreator(1)
// const thunk2 = thunkCreator(2)

// const a = () => {
//   const b = () => {
//     const c = () => {}
//     c()
//   }
//   b()
// }

// a()

// globalLE {pow: Function } --> null

const pow = (x, n) => {
  //powLE {x: 2, n: 1}
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
};

console.log(pow(2, 3)); //8

let i = 0;

while (true) {
  console.log(i++);
}
