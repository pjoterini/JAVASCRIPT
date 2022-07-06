async function fetchDoggoList() {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    const data = await res.json()
    createBreedList(data.message)
}

fetchDoggoList()

function createBreedList(breedList) {
 const breedListContainer = document.querySelector('#breed')
 breedListContainer.innerHTML = `
    <select onchange="loadByBreed(this.value)" id="doggo-list">
        <option>Select a doggo breed 🐶</option>
        ${Object.keys(breedList).map(breed => {
            return `<option>${breed}</option>`
        }).join('')}
    </select>
 `
}

async function loadByBreed(breed) {
    if(breed != 'Select a doggo breed 🐶') {
        const res = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await res.json()
        createSlideshow(data.message)
    }
}

function createSlideshow(images) {
    let count = 0
    document.querySelector('.slideshow').innerHTML = `
    <div class="slide" style="background-image: url(${images[0]});"></div>
    <div class="slide" style="background-image: url(${images[1]});"></div>
    `
    count += 2
    setInterval(nextSlide, 3000)

    function nextSlide() {
        setTimeout( function() {
            document.querySelector('.slideshow').insertAdjacentHTML('beforeend', `<div class="slide" style="background-image: url(${images[count]});"></div>`)
            document.querySelector('.slide').remove()
        }, 1000)

        if(count + 1 >= images.length) {
            count = 1
        } else {
            count++
        }
    }
}


