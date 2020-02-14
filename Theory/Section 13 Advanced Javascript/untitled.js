// call stack 
console.log('1');
console.log('2');
console.log('3');

const one = () => {
    const two = () => {
        console.log("4");
    }
    two();
}

// recursion
function foo() {
    foo()
}

foo()

// call stack
console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000);
console.log('3');

// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP