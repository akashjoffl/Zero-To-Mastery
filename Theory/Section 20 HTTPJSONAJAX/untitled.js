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


// Timer Promises 16:00

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hii')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Jajaaaa')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Woaaahhhhhhh')
})

Promise.all([promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })
