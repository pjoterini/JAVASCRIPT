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

document.getElementById('button1').addEventListener('click', loadUser)

function loadUser() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'user.json', true)

    xhr.onload = function(){
        if(this.status == 200) {
        console.log(this.responseText)
        }
    }

    xhr.send()
}