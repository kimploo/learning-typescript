// Generic: 매개변수가 있는 타입. 재사용 가능한 타입을 제작할 수 있다.
// ex) event handler
const button = document.querySelector(".button");
button?.addEventListener("click", (e) => {
  console.log("clicked!");
});

// 이벤트의 종류는 아주 많다. 그러면 React의 @types/react 라이브러리에서 타입 지정을 할 때는 이벤트마다 핸들러를 만들까?
// No. 아래와 같이 이벤트 하나를 컨트롤할 수 있는 "제너릭"한 타입을 하나 만들어 대응한다.

// 어떠한 엘리먼트, 어떠한 이벤트 핸들러가 와도 E에 적절한 이벤트, T에 적절한 엘리먼트를 넣어주면, 작동한다.
type EventHandler<E extends SyntheticEvent<any>> = (event: E) => void;
// type EventHandler<E extends SyntheticEvent<any>> = { bivarianceHack(event: E): void }["bivarianceHack"];

type ReactEventHandler<T = Element> = EventHandler<SyntheticEvent<T>>;
type ClipboardEventHandler<T = Element> = EventHandler<ClipboardEvent<T>>;
type CompositionEventHandler<T = Element> = EventHandler<CompositionEvent<T>>;
type DragEventHandler<T = Element> = EventHandler<DragEvent<T>>;
type FocusEventHandler<T = Element> = EventHandler<FocusEvent<T>>;
type FormEventHandler<T = Element> = EventHandler<FormEvent<T>>;
type ChangeEventHandler<T = Element> = EventHandler<ChangeEvent<T>>;
type KeyboardEventHandler<T = Element> = EventHandler<KeyboardEvent<T>>;
type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;
type TouchEventHandler<T = Element> = EventHandler<TouchEvent<T>>;
type PointerEventHandler<T = Element> = EventHandler<PointerEvent<T>>;
type UIEventHandler<T = Element> = EventHandler<UIEvent<T>>;
type WheelEventHandler<T = Element> = EventHandler<WheelEvent<T>>;
type AnimationEventHandler<T = Element> = EventHandler<AnimationEvent<T>>;
type TransitionEventHandler<T = Element> = EventHandler<TransitionEvent<T>>;

// 학습했던 Built-in 제너릭 타입이 있었다.
const numbers: number[] = [];
const strings: Array<string> = ["hello", "world", "generic"];
// 배열 제너릭은, <> 안에 배열에 들어가면 좋을 요소를 적으면 된다.

interface Array<T> {
  [n: number]: T;
  /**
   * Gets or sets the length of the array. This is a number one higher than the highest index in the array.
   */
  length: number;
  /**
   * Appends new elements to the end of an array, and returns the new length of the array.
   * @param items New elements to add to the array.
   */
  push(...items: T[]): number;
  /**
   * Combines two or more arrays.
   * This method returns a new array without modifying any existing arrays.
   * @param items Additional arrays and/or items to add to the end of the array.
   */
  concat(...items: ConcatArray<T>[]): T[];
  /**
   * Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[];
}

// 나는 input element를 집어올 것이라고 확신하는데, 타입스크립트는 인지하지 못하고 있다.
// querySelector의 제너릭 타입을 참고하여 문제를 해결할 수 있다.
// querySelector<E extends Element = Element>(selectors: string): E | null;
const input = document.querySelector(".username-input");
input.value = "제너릭 어렵네요 ;";
