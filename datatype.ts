function isEven(a:number) : boolean {
    return a % 2 === 0;
}
function determineSign(a:number) : string {
    if (a === 0) return "zero"
    else if (a < 0) return "negative"
    else return "positive"
}
console.log(isEven(199))
console.log('hello')
// --- `length` examples in TypeScript ---

// String
const s: string = 'hello'
const sLen: number = s.length

// Array
const nums: number[] = [1,2,3]
const arrLen: number = nums.length

// Tuple (length is a literal type if fixed)
const tup: [number, string] = [1, 'a']
// tup.length === 2 (type is 2 at compile time)

// Structs / objects with a length property
interface HasLength { length: number }
function logLength(x: HasLength) {
    console.log('length =', x.length)
}

logLength(s)        // string has `length`
logLength(nums)     // array has `length`
logLength(tup)      // tuple has `length`

// Generic constraint: accept any T that has a length
function firstN<T extends HasLength>(x: T, n: number) {
    // This doesn't assume indexing; just uses length
    return { length: x.length }
}

console.log({sLen, arrLen}, firstN(s, 2))


function numberLength(value: number): number {
    
    return value.toString().length
}

function maxOfThree(a: number, b: number, c: number): number {
    // your code here
    return Math.max(a,b,c);
}

type userRole = 'admin' | 'editor' | 'subscriber' | 'guest'
function getUserRoleMessage(role: userRole) : string {

    switch (role) {
    case 'admin':
        console.log('admin')
    
    }

    return role
}

let a = 'afd jjjj'
if ((a === '') || a === a.toUpperCase()) console.log()

// exercise 1: add appropriate type annotation to the following variable

console.log(a.split(" ")[0])


function replaceAll(mainText: string, target: string, repl: string): string {
    return mainText.replaceAll(target,repl)
    
    
}

console.log(replaceAll('hello word', 'hello', 'hi'))


const VOWELS = ["a", "e", "i", "o", "u"];

function countVowels(text: string): number {
   return text.toLowerCase().split("").reduce((acc, curr) => {
    return acc + (VOWELS.includes(curr) ? 1 : 0)
   }, 0);
}