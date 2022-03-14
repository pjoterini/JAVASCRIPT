const strengthMeter = document.getElementById("strength-meter")
const passwordInput = document.getElementById("password-input")
const reasonsContainer = document.getElementById("reasons")

passwordInput.addEventListener("input", updateStrengthMeter)
updateStrengthMeter()

function updateStrengthMeter() {
    const weaknesses = calculatePasswordStrenght(passwordInput.value)
   
    let strength = 100
    reasonsContainer.innerHTML = ''
    weaknesses.forEach(weakness => {
        if (weakness == null) return
    strength -= weakness.deduction
    const messageElement = document.createElement("div")
    messageElement.innerText = weakness.message
    reasonsContainer.appendChild(messageElement)
    })
    strengthMeter.style.setProperty('--strength', strength)
}

function calculatePasswordStrenght(password) {
    const weaknesses = []
    weaknesses.push(lengthWeakness(password))
    weaknesses.push(lowercaseWeakness(password))
    weaknesses.push(uppercaseWeakness(password))
    weaknesses.push(characterTypeWeakness(password))
    weaknesses.push(specialCharacterWeakness(password))
    weaknesses.push(repeatCharacterWeakness(password))
    return weaknesses
}

function lengthWeakness(password) {
    const length = password.length

    if(length <= 5) {
        return {
            message: 'Your password is too short',
            deduction: 40
        }
    }

    if(length <= 10) {
        return {
            message: 'Your password could be longer',
            deduction: 15
        }
    }
}

function lowercaseWeakness(password) {
    const matches = password.match(/[a-z]/g) || []

    if(matches.length === 0) {
        return {
            message: "Your password has no lowercase characters",
            deduction: 20
        }
    }

    if(matches.length <= 2) {
        return {
            message: "Your password could use more lowercase",
            deduction: 5
        }
    }
}

function uppercaseWeakness(password) {
const matches = password.match(/[A-Z]/g) || []

    if(matches.length === 0) {
    return {
        message: "Your password has no uppercase characters",
        deduction: 20
    }
    }
    if(matches.length <= 2) {
    return {
        message: "Your password could use more uppercase",
        deduction: 5
    }
    }
}

function characterTypeWeakness(password) {
const matches = password.match(/[0-9]/g) || []

    if(matches.length === 0) {
    return {
        message: "Your password has no numbers",
        deduction: 20
    }
    }
    if(matches.length <= 2) {
    return {
        message: "Your password could use more numbers",
        deduction: 5
    }
    }
}

function specialCharacterWeakness(password) {
const matches = password.match(/[^0-9a-zA-Z\s]/g) || []

    if(matches.length === 0) {
    return {
        message: "Your password has no special characters",
        deduction: 20
    }
    }
    if(matches.length <= 2) {
    return {
        message: "Your password could use more special characters",
        deduction: 5
    }
    }
}

function repeatCharacterWeakness(password) {
    const matches = password.match(/(.)\1/g) || [] 
    if (matches.length > 0) {
        return {
            message: "Your password has repeat characters",
            deduction: matches.length * 10
        }
    }
}