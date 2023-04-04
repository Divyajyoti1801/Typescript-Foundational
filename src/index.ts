//Basic Types
let id: number = 5;
let company: string = "Divyajyoti";
let isPublished: boolean = true;
let x: any = "Hello";
let age: number = 23;

//Array
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "hello"];

//Tuple
let person: [number, string, boolean] = [1, "Divyajyoti", true];
//Tuple Array
let employee: [number, string][];
employee = [
  [1, "Divya"],
  [2, "Deeptesh"],
  [3, "Avichal"],
  [4, "Priya"],
];

//Union
let pid: string | number;
pid = "divyajyoti";

//Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

//Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

//Type Assertion
let cid: any = 1;
let customerID = <number>cid;
let customerId = cid as number;

//Functions
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

//Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}
const user1: UserInterface = { id: 1, name: "John" };

type Point = number | string;
const p1: Point = "Data";

interface MathFunc {
  (x: number, y: number): number;
}

const addition: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

//Classes

interface PersonInterface {
  id: number;
  name: string;
  display(): void;
}
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  display(): void {
    console.log("ID: " + this.id + " Name: " + this.name);
  }
}

class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

//Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "Divya"]);
