
// object(객체)
// 😮 TypeScript에는 객체 표현을 위해 두 방법을 사용합니다. type, interface
type GameUnitA = {
  // 타입에 지정한 속성은 꼭 사용해야 함
  name: string;
  HP: number;
  // readonly property: 수정 불가
  readonly MP: number;
  // optional property: 없어도 OK
  range?: number;
}

interface GameUnitB {
  name: string;
  HP: number;
  MP: number;
}

type UnitMagicStat = {
  MR?: number;
}

interface UnitAttackStat {
  AD?: number;
  AS?: number;
}

// 롤 케릭터, 맞춰보세요 :)
const unitA: GameUnitA = {
  name,  // 타입에 지정한 속성을 제대로 적지 않으면 에러
  HP: 675,
  MP: 310
}

const unitB: GameUnitB = {
  name,
  HP: 685,
  MP: 285
}

// 두 방식은 필요에 따라 자유롭게 쓰면 된다.
// MS 선배님의 한마디: If you would like a heuristic, use interface until you need to use features from type.

// intersection type
// 두 객체의 속성을 모두 가지고 싶은 경우
type Mid = GameUnitA & UnitMagicStat;

const Azir: Mid = {
  name: "아지르",
  HP: 550,
  MP: 320,
  // 어떤 속성을 추가로 적을 수 있을까요? 맞춰보세요 :)
}

// extends
// 다른 객체의 속성을 가지고 싶은 경우
interface ADCarry extends GameUnitA, UnitAttackStat {}

const Ashe: ADCarry = {
  name: "애쉬",
  HP: 640,
  MP: 280
  // 어떤 속성을 추가로 적을 수 있을까요? 맞춰보세요 :) 
}

const Corki: ADCarry = {
  name: '코르키',
  HP: 588,
  MP: 350
}

// 배열의 요소로 객체가 들어오는 경우 유용하게 활용 가능
const FirstADCarries: ADCarry[] = [Corki]; 
const SecondADCarries: Array<ADCarry> = [Ashe, Corki]; 
