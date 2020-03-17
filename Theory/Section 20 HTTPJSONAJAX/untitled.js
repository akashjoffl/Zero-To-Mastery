// Promises 

const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("Stuff Worked");
    } else {
    reject("Error")
}
});

promise.then(result => console.log(result));

// Promise { <state>: "pending" }  
// Stuff Worked

    promise
        .then(result => result + '!')
        .then(result2 => result2 + '?') 
        .catch(() => console.log("Error!"))
        // Catch runs when something fails
        .then(result3 => {
            throw Error;
            console.log(result3 + "!");
        })
// Add the catch statement at the end of the code 
