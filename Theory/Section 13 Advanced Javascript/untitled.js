// ES10 (ES2019)

const array = [1, 2, 3, 4, 5];

const array2 = [1, 2, [3, 4], 5];

const array3 = [1, [2, 3],
    [
        [4], 5
    ]
];
console.log(array3.flat(5)); // [ 1, 2, 3, 4, 5 ]

const entries = ["Akash", "Andrade", , , , , , , , "Gsus"]
const newEntry = entries.flatMap(yes => yes + " Joe"); // [ "Akash Joe", "Andrade Joe", "Gsus Joe" ]

let userEmail = "      akashjoffl@icloud.com";
let userEmail2 = "johnydep@gmail.com     ";

userEmail = userEmail.trimStart(); // "akashjoffl@icloud.com"
userEmail2 = userEmail2.trimEnd(); // "johnydep@gmail.com"

// formEntries 

let userProfiles = [
    ["commanderTom", 23],
    ["derrickma", 40],
    ["hansai", 14]
];

let obj = Object.fromEntries(userProfiles); // { commanderTom: 23, derrickma: 40, hansai: 14 }

Object.entries(obj); // backToArrays

// tryCatchBlock

try {
    akash + "hi"
} catch (error) { // (error) is optional in ES10
    console.log("You messed the code " + error)
}

// You messed the code ReferenceError: akash is not defined