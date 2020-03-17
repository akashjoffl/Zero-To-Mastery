// ASYNC AWAIT

// 8:40

async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await resp.json();
    // .then(resp => resp.json())
    console.log(data);
}

// EXAMPLE 2

const urls = [
    'https://jsonplaceholder.typicode.com/todos',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts'
]

const getData = async function() {
    try {
        const [ todos, users, posts ] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ))
        console.log('todos', todos)
        console.log('users', users)
        console.log('posts', posts)
    } catch (err){
        console.log('Oops', err)
    }
}

// getData()