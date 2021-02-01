const myBoolean = true;
// you've declared a variable, and you've assigned it to true...
// so I know it's a boolean!

const myNumber = 3;
// you've declared a variable, and you've assigned it to 3...
// so I know it's a number!

const myString = "real";
// you've declared a variable, and you've assigned it to "real"...
// so I know it's a string!

const sumOne = myBoolean + 3;
// oh, you're adding a number to a boolean?
// Well, I don't really know what it means to add a number to a boolean.
// I could have added a number to a number if you'd have asked me...
// yeah, that would have been way more convenient
// so, you know what, I'll assume you meant to use a number instead of a boolean
// 1 seems like a plausible way to represent true
// so I'll treat this like 1 + 3...
// and return a number!

console.log(sumOne); // 4
console.log(typeof sumOne); // 'number'

const sumTwo = sumOne + myString;
// oh, you're adding the string "real" to a number?
// well, I don't really know what it means to add "real" to a number.
// if you'd given me "for " + "real", I could have given you back "for real"
// it would have been more convenient if you'd given me a string for sumOne
// so, you know what, I'll assume you meant to use a string instead of a number
// so I'll treat this like "4" + "real"...
// and return a string!

console.log(sumTwo); // "4real"
console.log(typeof sumTwo); // "number"
