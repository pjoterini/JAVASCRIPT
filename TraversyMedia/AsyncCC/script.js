const posts = [ 
    { title: 'post one', body: 'tis is post one'},
    { title: 'post two', body: 'tis is post two'},
]

// CALLBACKS

// function getPost() {
//     setTimeout(() => {
// let output = '';
    
//     posts.forEach((post) => {
//     output += `<li>${post.title}</li>`
//     })
//     document.body.innerHTML = output
//     }, 1000)
// } 

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post)
//         callback()
//     }, 2000)
// }

// createPost(
//     {title: 'post three', body: 'this is post three'},
//     getPost
// )

// PROMISES

// function getPost() {
//     setTimeout(() => {
// let output = '';
    
//     posts.forEach((post) => {
//     output += `<li>${post.title}</li>`
//     })
//     document.body.innerHTML = output
//     }, 1000)
// } 

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post)
           
//             const error = false

//             if(!error) {
//                 resolve()
//            } else {
//                reject('error: smth went wrong')
//            }
//         }, 2000)
//     })
   
// }

// createPost({title: 'post three', body: 'this is post three'})
// .then(getPost)
// .catch(err => console.log(err))

// PROMISE.ALL

// const promise1 = Promise.resolve('hello boi')
// const promise2 = 10
// const promise3 = new Promise((resolve, reject) => setTimeout(
//     resolve, 2000, 'goodbye'
// ))

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>
// res.json())

// Promise.all([promise1, promise2, promise3, promise4]).then((
//     (values) => console.log(values)));

// ASYNC AWAIT

// function init() {
//     await createPost ({title: 'post three', body: 'this is post three'})

//     getPost()
// }

// init()