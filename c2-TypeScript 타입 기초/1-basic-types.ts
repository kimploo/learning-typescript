// 변수 타입 표기 (Type Annotation)
// 🧑‍🏫 JavaScript 문법을 그대로 사용하고, 앞에 콜론과 타입명을 적는다.

// string(문자열)
let newBookTitle: string = '클린 코드';

// number(숫자)
const num: number = 42;

// boolean(불리언)
const isHuman: boolean = false;

// 🧑‍🏫 타입에 맞는 코드를 작성해야 한다.
newBookTitle = 'Clean Code';
newBookTitle.toUpperCase();

// 🧑‍🏫 타입에 맞지 않는 코드는 TypeScript 컴파일러가 에러를 던져준다.
newBookTitle = 42; // Type 'number' is not assignable to type 'string'.
num.length // Property 'length' does not exist on type 'number'.

