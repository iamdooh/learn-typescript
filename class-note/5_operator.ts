function logMessage(value: string | number) {
  if (typeof value === 'number') {
    console.log(value.toLocaleString());
  }
  if (typeof value === 'string') {
    console.log(value.toString());
  }
  throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// function askSomeone(someone: Developer | Person) {
//   someone.name;
// }

// askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
// askSomeone({ name: '캡틴', age: 100});

function askSomeone(someone: Developer & Person) {
  someone.name;
}

askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 100 });