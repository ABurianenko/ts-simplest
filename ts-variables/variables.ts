// Primitive Types

const myString: string = "Hello World";
const myNumber: number | undefined = 42;
const myBoolean: boolean = true;

const undefinedVariable: undefined = undefined;
const nullVariable: null = null;

const bigIntNumber: bigint = 100n;
const symbolVariable: symbol = Symbol("mySymbol")

let myStringInferred = "Hello World";

// Object Types

const stringArray: string[] = ['apple', 'banana', 'cherry'];

type User = { name: string; age: number; isAvtive: true}
const user: User = {
    name: 'John Doe',
    age: 42,
    isAvtive: true,
}