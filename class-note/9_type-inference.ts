// 타입 추론 기본 1
var a = 'abc';

function getB(b = 10) {
  var c = 'hi';
  return b + c;
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
// var shoppingItem: Dropdown<string> = {
//   value: 'abc',
//   title: 'hello'
// }

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}
var shoppingItem: Dropdown<string> = {
  value: 'abc',
  title: 'hello'
}

var detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'a',
  tag: 'b',
}

// Best Common Type
var arr = [1, 2, true, true, 'a'];