const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const namee = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')

function getData() {
    header.innerHTML =  `<img src="https://source.unsplash.com/random" alt="" />`
    title.innerHTML = `Lorem ipsum dolor sit amet.`
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero necessitatibus ratione autem accusantium similique.`
    profile_img.innerHTML = ` <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`
    namee.innerHTML = `John Doe`
    date.innerHTML = `Oct 08, 2020`

}

setTimeout(() => {
getData()
animated_bgs.forEach((obj) => {
   obj.classList.remove('animated-bg') 
})
}, 2000)

