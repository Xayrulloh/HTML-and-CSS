let min, max, hiddenNumber;

function check() {
    if (!from.value || !to.value || !guess.value) {
        advance.innerText = 'First fill inputs'
        advance.classList.add('red')
    } else if((to.value - from.value) <= 4) {
        advance.innerText = 'between number should be different with 5 numbers'
        advance.classList.add('red')
    } else if (+guess.value > +to.value) {
        advance.innerText = 'guess number can\'t bigger than maximum number'
        advance.classList.add('red')
    } else if (+guess.value < +from.value) {
        advance.innerText = 'guess number can\'t less than minimum number'
        advance.classList.add('red')
    } else {
        if (min != from.value || max != to.value) {
            min = +from.value, max = +to.value
            hiddenNumber = randomNumber(min, max)
        }
        if (hiddenNumber == guess.value) {
            advance.innerText = 'Congratulations you found hidden number'
            advance.classList.add('green')
            return
        } else if (guess.value > hiddenNumber) {
            advance.innerText = 'Your guess number is bigger than hidden number'
            advance.classList.add('gray')
        }  else if (guess.value < hiddenNumber) {
            advance.innerText = 'Your guess number is less than hidden number'
            advance.classList.add('gray')
        }
    }
    setTimeout(() => {
        advance.innerText = ''
        advance.classList.remove('red')
        advance.classList.remove('green')
        advance.classList.remove('gray')
    }, 2000);
}

function randomNumber(min, max) { 
    return Math.floor(Math.random() * max) + min
}

function bridge(e) {
    if (e.keyCode == 13) return check()
}