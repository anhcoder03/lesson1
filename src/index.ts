import express from "express";
import * as lodash from "lodash"

const app = express();

//Khai báo type cho các biến: string, number, boolean, undefined, null, date
const name: string = "phianh";
const age: number = 20;
const isActive: boolean = true;
const isBug: undefined = undefined;
const variableNull: null = null;
const variableDate: Date = new Date();
console.log(name, age, isActive, isBug, variableNull, variableDate);

//Khai báo type cho các Object (id, name, gender, birthday) => khai báo biến với type trên, nhập dữ liệu đúng và sai => dùng lệnh check type để kiểm tra
type TInfomation = {
  id: number;
  name: string;
  gender: string;
  birthday: Date;
};
//  correct =>
const myInfo1: TInfomation = {
  id: 1,
  name: "Phi Anh",
  gender: "Nam",
  birthday: new Date(),
};
console.log(myInfo1);

//wrong =>

// const myInfo2: TInfomation = {
//     id: "1",
//     name: "Phi Anh",
//     gender: "Nam",
//     birthday: new Date
// }
// console.log(myInfo2)

//Khai báo type cho Object chung (chưa biết trước các trường dữ liệu)
const myInfo3: any = {
  id: "1",
  name: "Phi Anh",
  gender: "Nam",
  birthday: new Date(),
};

console.log(myInfo3);

//Khai báo type cho Object nested (ex: user.name.last)
type nestedType = {
  id: number;
  fullname: {
    firstname: string;
    lastname: string;
  };
  gender: string;
  birthday: Date;
};

//Khai báo type theo kiểu generic với đối số truyền vào là các type cơ bản: string, number, boolean,…

const test4: nestedType = {
  gender: "Nam",
  fullname: {
    firstname: "Nguyen",
    lastname: "Phi Anh",
  },
  id: 1,
  birthday: new Date(),
};
console.log(test4.fullname.lastname);

//Khai báo type theo kiểu generic với đối số truyền vào là các type cơ bản: string, number, boolean,…
function logName<T>(name: T): T {
  return name;
}
console.log(logName<string>("Nguyeenx PhiiAnh"));

//Khai báo type theo kiểu generic với đối số Object
type MyGenericObject<T> = {
  info: T;
};
interface IInfo4 {
  name: string;
  age: number;
}
const info4: MyGenericObject<IInfo4> = {
  info: {
    age: 20,
    name: "phianh",
  },
};
console.log(info4);

//Khai báo type cho mảng (mảng số, chữ, mảng object, …)

const arrayNumber: number[] = [1, 2, 3];
console.log(arrayNumber);

const arrayString: string[] = ["h", "e", "l", "l", "o"];
console.log(arrayString);

const arrayObject: IInfo4[] = [
  {
    age: 20,
    name: "phianh",
  },
  {
    age: 18,
    name: "hihi",
  },
];
console.log(arrayObject);

// Các function cơ bản của mảng (filter, find, …)
function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate);
}

function findInArray<T>(
  arr: T[],
  predicate: (item: T) => boolean,
): T | undefined {
  return arr.find(predicate);
}

const numbers: number[] = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
const foundNumber = findInArray(numbers, (num) => num === 3);
console.log(evenNumbers);
console.log(foundNumber);

//Tìm hiểu về các type có sẵn (Partial, Pick, Omit, Return Type, ParameterType,

// Partial => tạo ra một type mới từ type T nhưng tất cả các trường đều trở thành optional.
type Person = {
  name: string;
  age: number;
};

const partialPerson: Partial<Person> = { name: "John" };
console.log(partialPerson);

// Pick<T, K>: Tạo ra một type mới từ type T chỉ bao gồm các trường được chỉ định bởi type K.

const pickPerson: Pick<Person, "age"> = { age: 18 };
console.log(pickPerson);

// Omit<T, K>: Tạo ra một type mới từ type T loại bỏ các trường được chỉ định bởi type K

const omitPerson: Omit<Person, "age"> = { name: "hehe" };
console.log(omitPerson);

//Return Type : Lấy kiểu dữ liệu của giá trị trả về từ một hàm
const returnTypeEx: ReturnType<() => number> = 10;
console.log(returnTypeEx);

// ParameterType: Lấy kiểu dữ liệu của tham số đầu tiên của một hàm.

const parameterType: ThisParameterType<(title: string) => void> = "hehe";

console.log(parameterType);


// class
class Person2 {
  constructor(
    public name: string,
    public age: number,
  ) {}

  sayHello(): void {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`,
    );
  }
}
const newPerson = new Person2("phianh", 20).sayHello;
console.log(newPerson);


// promise

function fetchData(): Promise<Person> {
    return new Promise<Person>(() => {
     console.log("ok")
    });
}

// function
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(1,2))


// file d.ts (Declaration files)

//được sử dụng trong TypeScript để cung cấp thông tin về cấu trúc của các module hay thư viện không phải TypeScript. 
//Điều này giúp TypeScript hiểu được các thông tin về kiểu dữ liệu, hàm, class, và các phần khác của mã nguồn không phải TypeScript.
//ex:  nếu sử dụng một thư viện js thì co theer tạo file d.ts để mô tả kiểu dữ liệu cho thư viện đó



//Tìm hiểu về  global type

// global type là kiểu dữ liệu có thể sử dụng mà không cần import nó. 
// trong một số trường hợp nếu muốn sử dụng một kiểu dữ liệu được định nghĩa global mà không cần phải import từ một module cụ thể.

// Sử dụng global type có thể gây ra các vấn đề xung đột tên và làm giảm tính module của mã nguồn TypeScript,


// use lodash 
const numbers2 = [1, 2, 3, 4, 5];

const squaredNumbers: number[] = lodash.map(numbers2, (num: number) => num * num);
console.log(squaredNumbers)


app.listen(4000, () => {
  console.log("Server running");
});
