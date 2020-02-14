const flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
].reduce(
    (a, b) => a.concat(b), []);


// debugger
const flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
].reduce(
    (accumalator, array) => {
        debugger;
        return accumalator.concat(array)
    }, []);