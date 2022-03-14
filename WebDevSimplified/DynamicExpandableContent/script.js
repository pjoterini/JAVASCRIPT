const expandableButtons = document.querySelectorAll('[data-expand-button]')
const expandableElements = document.querySelectorAll('[data-expandable]')


checkForOverflow()
expandableButtons.forEach(button => {
    button.addEventListener("click", toggleText)
    setExpandButtonText(button)
})

function checkForOverflow(){
    expandableElements.forEach(expandableElement =>{
        if (expandableElement.classList.contains('expanded')) return 
        const expandableText = expandableElement.querySelector('[data-expand-text]')
        const overflowing = expandableText.scrollHeight > expandableText.clientHeight 
        expandableElement.dataset.overflow = overflowing
    })
}


function toggleText(e) {
    const expandableElement = e.target.closest('[data-expandable]')
    expandableElement.classList.toggle('expanded')
    setExpandButtonText(e.target)
}

function setExpandButtonText(button) {
    const expandableElement = button.closest('[data-expandable]')
    const expanded = expandableElement.classList.contains('expanded')
    button.innerText = expanded ? "Read less" : "Read More"
}

