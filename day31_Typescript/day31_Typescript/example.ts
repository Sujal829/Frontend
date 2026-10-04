//Basic Type
let age: number = 20;
let __name: string = "ABCD";
let isActive: boolean = true;
let skills: string[] = ["JS", "React", "Ts"];

// Union Type
let id: number | string;
id = 10;
id = "12ecscsd-sdccsdc12";
// id = {};  // Type '{}' is not assignable to type 'string | number'.ts

// Type Aliases
type IDType = number | string;

let uid: IDType;
let emp_id: IDType;
let mobile: IDType;

// Function

function displayName(): string {
  return "john";
}

function add(a: number, b: number): number {
  return a + b;
}

// add(2); //Expected 2 arguments, but got 1.

add(2, 3); // correct way
type TNumber = number;
function sum(a: TNumber, b: TNumber): TNumber {
  return a + b;
}

//Optional params

function greet(name: string, msg?: string): string {
  return msg ? `${msg}, ${name}` : `Hello ${name}`;
}

greet("Rahul"); // Hello Rahul
greet("Rahul", "Hey"); // Hey, Rahul

// interface
// interface defines the shape of an object.

interface IUser {
  id: number;
  name: string;
  email: string;
  address?: string | null; //optional
  skills: string[];
}

const userDetails: IUser = {
  id: 1212,
  name: "Rahul",
  email: "rahul@gmail.com",
  skills: ["JS", "React", "Ts"],
  // address: null
};

// Interface with functions

interface AddFn {
  (x: number, y: number): number;
}

const addNum: AddFn = (a, b) => a + b;
// params as object
interface IParam {
  a: number;
  b: number;
}
interface SumFn {
  ({ a, b }: IParam): number;
}
const sumNum = ({ a, b }: IParam): number => a + b;
const sumNum2: SumFn = ({ a, b }) => a + b;

// Oops concepts

class Car {
  brand: string;
  year: number | undefined;
  constructor(brand: string, year?: number | undefined) {
    this.brand = brand;
    this.year = year;
  }

  details(): string {
    return this.year ? `${this.brand}-${this.year}` : this.brand;
  }
}

const c1 = new Car("Yamaha");

// Multiple
// JS classes works on a single prototype chain, so as TS
// TS also does not support true multiple inheritance, because it is subset of JS

class A {}
class B {}
// class C extends A, B {} not allowed

// - using interface we can implement Multiple Inheritance in TS

interface CanWalk {
  walk(): void;
}

interface CanSwim {
  swim(): void;
}

class Person implements CanWalk, CanSwim {
  walk(): void {
    console.log("Walking....!");
  }
  swim(): void {
    console.log("Swimming....!");
  }
}
const p = new Person();
p.walk();
p.swim();

// Mixins (Closest to real multiple inheritance)

class Walker {
  walk() {
    console.log("Walking...!");
  }
}

class Swimmer {
  swim() {
    console.log("Swimmming...!");
  }
}

// Mixin function
function applyMixins(derivedCtors: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      derivedCtors.prototype[name] = baseCtor.prototype[name];
    });
  });
}

// class Human {
//     walk() {
//         throw new Error("Method not implemented.");
//     }
//     swim() {
//         throw new Error("Method not implemented.");
//     }

// }

class Human implements Walker, Swimmer {
  walk!: () => void;
  swim!: () => void;

  constructor() {
    // assign methods from the prototype (or from new Walker()/Swimmer())
    this.walk = (Walker.prototype as any).walk;
    this.swim = (Swimmer.prototype as any).swim;
  }
}

applyMixins(Human, [Walker, Swimmer]);

const h = new Human();
console.log(h);

h.walk();
h.swim();
