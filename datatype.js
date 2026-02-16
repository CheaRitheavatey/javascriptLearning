function isEven(a) {
    return a % 2 === 0;
}
function determineSign(a) {
    if (a === 0)
        return "zero";
    else if (a < 0)
        return "negative";
    else
        return "positive";
}
console.log(isEven(199));
console.log('hello');
// --- `length` examples in TypeScript ---
// String
var s = 'hello';
var sLen = s.length;
// Array
var nums = [1, 2, 3];
var arrLen = nums.length;
// Tuple (length is a literal type if fixed)
var tup = [1, 'a'];
function logLength(x) {
    console.log('length =', x.length);
}
logLength(s); // string has `length`
logLength(nums); // array has `length`
logLength(tup); // tuple has `length`
// Generic constraint: accept any T that has a length
function firstN(x, n) {
    // This doesn't assume indexing; just uses length
    return { length: x.length };
}
console.log({ sLen: sLen, arrLen: arrLen }, firstN(s, 2));
function numberLength(value) {
    return value.toString().length;
}
function maxOfThree(a, b, c) {
    // your code here
    return Math.max(a, b, c);
}
function getUserRoleMessage(role) {
    switch (role) {
        case 'admin':
            console.log('admin');
    }
    return role;
}
var a = 'afd jjjj';
if ((a === '') || a === a.toUpperCase())
    console.log();
// exercise 1: add appropriate type annotation to the following variable
console.log(a.split(" ")[0]);
function replaceAll(mainText, target, repl) {
    return mainText.replaceAll(target, repl);
}
console.log(replaceAll('hello word', 'hello', 'hi'));
