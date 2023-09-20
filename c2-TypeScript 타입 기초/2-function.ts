
// function(함수)
// 🧑‍🏫 매개변수도 변수다. TypeScript의 경우 변수 타입은 명확하게 지정하는게 좋다.
// 🧑‍🏫 타입을 명확하게 지정하지 않으면 매개변수의 타입은 any가 될 것

// function square(num) { // num의 타입은 any, 암시적
//   return num * num
// }

function square(num: number) { // num의 타입을 number로 표시
  // num.toUpperCase() // 타입이 number로 잘 지정되어 string 메서드가 동작하지 않는다.
  return num * num
}

// 🧑‍🏫 필요 매개변수의 개수가 틀려도 알려준다.
square() // 에러, 1개의 매개변수를 입력하세요
square(4) // 16

// 🧑‍🏫 default parameter와 타입 표기를 같이 작성하는 경우 아래와 같이 작성한다.
// function square(num: number = 3) { // num의 타입은 number, default 3
//   return num * num
// }
// square() // 9

// 🧑‍🏫 함수 리턴값 타입을 지정하지 않으면, 타입 추론을 한다.
// function square(num: number = 3) { 
//   // 따로 타입을 명시하지 않았으나, number 매개변수를 단순히 곱한 결과는 언제나 number다.
//   // 그래서 square의 리턴 타입은 number로 추론됨
//   return num * num
// }

// square(3) // 9

// 🧑‍🏫 응용
function isNoon(date: Date) {
  // 12시 0분이면 `true`를 반환하여 `date`가 정오임을 표현
  // 그렇지 않으면 `false`를 반환하여 `date`가 정오가 아님을 표현
  // 언제나 true or false이기 때문에 리턴 타입은 boolean
  if (date.getHours() === 12 && date.getMinutes() === 0) {
    return true
  }
  return false
}

// 🧑‍🏫 응용 2
// function isNoon(date: Date) {
//   // 12시 0분이면 true를 반환하여 date가 정오임을 표현
//   // 그렇지 않으면 '정오가 아닙니다.'를 반환하여 date가 정오가 아님을 표현
//   // 언제나 true or 문자열 '정오가 아닙니다.'이기 때문에 
//   // 리턴 타입은 true | '정오가 아닙니다.'
//   if (date.getHours() === 12 && date.getMinutes() === 0) {
//     return true
//   }
//   return '정오가 아닙니다.'
// }

// 🧑‍🏫 익명 함수에도 타입 표기를 할 수 있다.
// MDN 예시 변형
const products = [
  { name: "sports car" },
  { name: "laptop" },
  { name: "phone" },
];

const productsWithPrice = products.map((product: { name: string }) => {
// 리턴값의 경우 타입 추론이 된 것을 알 수 있음.
  return {
    ...product,
    price: 100
  }
});

// `void` 타입
// 	JavaScript에서는 아무것도 리턴하지 않으면 `undefined`가 암묵적으로 리턴된다.
// 	TypeScript에서는 아무것도 리턴하지 않는 함수의 리턴값 타입을 `void`로 따로 관리한다.
//  리턴값이 `void`인 함수에서 무언가를 리턴하려고 시도하면 에러를 낸다.
const unexpectedErrorLogger = (e: Error): void => {
  console.error(e) // log error
}
const unexpectedErrorLogger2 = (e: Error): void => {
  return e // Type 'Error' is not assignable to type 'void'.
}

// `naver` 타입
// 함수가 리턴을 할 가능성이 전혀 없는 경우 함수 리턴값 타입을 `naver`로 지정할 수 있다.
function fail(msg: string): never {
	// 에러가 throw, return값은 없다.
  throw new Error(msg);
}
	
function trueLove(): never {
  while(true) {
    console.log("❤️")
  }
}