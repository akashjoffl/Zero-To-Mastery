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
    .then(result => {
        throw error
        return result + '!'
    })
    .then(result2 => {
        
        console.log(result2);
    })
    .catch(() => console.log("Error!"))

// Stuff Worked!

