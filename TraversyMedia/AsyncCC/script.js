// CALLBACKS
//  const posts = [
//      { title: 'post one', body: 'this is post one'},
//      { title: 'post two', body: 'this is post two'}
//  ]

//  function getPosts() {
//      setTimeout(() => {
//         let output = ''
//         posts.forEach((post, index) =>{
//         output += `<li>${post.title}</li>`
        
//         document.body.innerHTML = output
//         })
//      }, 1000) 
//  }

//  function createPost(post, callback) {
//     setTimeout(() => {
//     posts.push(post)
//     callback()
//     }, 2000)
//  }

//  createPost({ title: 'post three', body: 'this is post three'}, getPosts)

// PROMISES

 const posts = [
    { title: 'post one', body: 'this is post one'},
    { title: 'post two', body: 'this is post two'}
]

function getPosts() {
    setTimeout(() => {
       let output = ''
       posts.forEach((post, index) => {
       output += `<li>${post.title}</li>`
       
       document.body.innerHTML = output
       })
    }, 1000) 
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        posts.push(post)

        const error = false

        if(!error){
            resolve()
        } else {
            reject('error, smth went wrong')
        }
        },2000)
    })
   
}

createPost({ title: 'post three', body: 'this is post three'}).then(getPosts)
// .catch(err => console.log(err))

// ASYNC AWAIT

// async function init() {
//    await createPost({ title: 'post three', body: 'this is post three'})

//    getPosts()
// }

// init()

// PROMISE.ALL

// const promise1 = Promise.resolve('hello') 
// const promise2 = 10 
// const promise3 = new Promise((resolve, reject) =>  setTimeout(resolve, 2000,'goodbye'))
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values))



