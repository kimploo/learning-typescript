// Union(유니온) 타입: 2개 이상의 타입을 표시할 때 사용
let age: number | string = 20;
age = 23;
age = "30";
const stuff: (number | string)[] = [12, '34'];
type SkillLevel = "초급" | "중급" | "고급";

// Type Narrowing
// 타입이 여러개일 수 있는 경우, 조건문으로 타입을 한정한다.
function calculateTax(price: number | string, tax: number) {
  // 아래 Type Guard가 없으면 어떤 에러가 날까요?
	if (typeof price === 'string') {
		return price.replace('$', '');
		// return Number(price.replace('$', ''));
	}
	return price * tax
}

// document.querySelector의 리턴값은 왜 HTMLDivElement | null 일까요?
// const div: HTMLDivElement | null
const div = document.querySelector('div')

// 아래 에러는 어떻게 해결할 수 있을까요?
div.textContent 

// Tuple(튜플): 길이가 정해진 배열
// 🚨 배열과 표시 방식이 유사하기 때문에 조심!
let user: [string, number, boolean] = ["TypeScript", 20, true];

// 심지어는 길이가 초과해도 push도 됨 (..)
user.push(1)

// 이런 이유로 튜플이 필요한 경우, 타입을 잘 설정한 객체를 쓰게도 한다.

// string, number, boolean (✅)
// String, Number, Boolean (🤔)
// 레퍼런스: https://stackoverflow.com/a/14727461

// Enum: 이름이 있는 상수의 집합이다.
enum Days {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
}

const today = Days.FRIDAY;

function isWeekend(day: Days): boolean {
  return day === Days.SATURDAY || day === Days.SUNDAY;
}

console.log(isWeekend(today));  // Outputs: false
console.log(isWeekend(Days.SUNDAY));  // Outputs: true

// Numeric Enum
// 값을 따로 지정하지 않으면 순서대로 0,1,2 ...
enum NumericDays {
  MONDAY, // 0
  TUESDAY, // 1
  WEDNESDAY, // 2
  THURSDAY, // 3
  FRIDAY, // 4
  SATURDAY, // 5
  SUNDAY // 6
}

// 값을 따로 지정할 수 있음
enum NumericDaysAssgined {
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
  SUNDAY = 7
}

// String Enum
// 문자열을 값으로 지정하면 String Enum
enum StringDays {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY"
}

// Heterogeneous Enum
// 값의 타입을 섞어서 지정하면 Heterogeneous Enum
// 썩 바람직해보이진 않음 ..
enum HeterogeneousDays {
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = 5,
  SATURDAY = "SATURDAY",
  SUNDAY = 7
}