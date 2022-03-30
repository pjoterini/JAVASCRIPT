// document.getElementById("button").addEventListener
// ('click', loadText)

// function loadText(){
//     // create XHR obj
//     const xhr = new XMLHttpRequest()
//     console.log(xhr)
//     // OPEN function - type, url/file, async
//      xhr.open('GET', 'sample.txt', true)

//      xhr.onload = function (){
//          if(this.status == 200){
//              console.log(this.responseText)
//          }
//      }

//      xhr.send()

//     }

// START

// document.getElementById('button1').addEventListener('click', loadUser)
// document.getElementById('button2').addEventListener('click', loadUsers)

// function loadUser() {
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', 'user.json', true)

//     xhr.onload = function(){
//         if(this.status == 200) {
//         let user = JSON.parse(this.responseText)

//         let output = ''

//         output += '<ul>' + 
//         '<li>ID: '+user.id+'</li>' +
//         '<li>Name: '+user.name+'</li>' +
//         '<li>Email: '+user.email+'</li>' +
//         '</ul>';
//         document.getElementById('user').innerHTML = output
//         }
//     }

//     xhr.send()
// }
// function loadUsers() {
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', 'users.json', true)

//     xhr.onload = function(){
//         if(this.status == 200) {
//         let users = JSON.parse(this.responseText)

//         let output = ''
//         for(var i in users){    
//         output += '<ul>' + 
//         '<li>ID: '+users[i].id+'</li>' +
//         '<li>Name: '+users[i].name+'</li>' +
//         '<li>Email: '+users[i].email+'</li>' +
//         '</ul>';
//         }
//         document.getElementById('users').innerHTML = output
//         }
//     }

//     xhr.send()
// }

// GITHUB 

document.getElementById('button').addEventListener('click', loadUsers);

function loadUsers() {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.github.com/users', true)

    xhr.onload = function(){
        if(this.status == 200){
            var users = JSON.parse(this.responseText)
            
            var output = ''
            for(var i in users){
                output +=
                '<div class="user">' +
                '<img src="'+users[i].avatar_url+' "width="70" height="70">' +
                '<ul>' +
                '<li>ID: '+users[i].id+'</li>' +
                '<li>Login: '+users[i].login+'</li>' +
                '</ul>' +
                '</div>';
            }
            document.getElementById('users').innerHTML = output
        }
    }
    xhr.send()
} 