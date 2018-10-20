// get drum buttons: Q, A, S, etc
const Q = document.querySelector('#Q')
const W = document.querySelector('#W')
const E = document.querySelector('#E')
const A = document.querySelector('#A')
const S = document.querySelector('#S')
const D = document.querySelector('#D')
const Z = document.querySelector('#Z')
const X = document.querySelector('#X')
const C = document.querySelector('#C')
const power = document.querySelector('#power')
const display = document.querySelector('#display')

const sounds = {
    Q: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    W: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    E: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    A: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    S: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    D: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    Z: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    X: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    C: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}

// attach unique sound to each button and 
Q.addEventListener('click', function () {
    // create audio element and set the source attribute to 
    // corresponding mp3 file for the key
    const myAudio = document.createElement('audio')
    if (myAudio.canPlayType('audio/mpeg')) {
        myAudio.setAttribute('src', sounds.Q)
    } else {
        console.log('can not play sound')
    }
    if (power.checked) {
        // display sound being played if power is toggled on
        display.textContent = 'Heater 1'
        // play sound on button click if power is toggled on
        myAudio.play()
        display.style.backgroundColor = '#968DC3'  
    } else {
        alert(`Power is on: ${power.checked}\nToggle power on`)
    }
})


W.addEventListener('click', function () {
    const myAudio = document.createElement('audio')
    // document.body.style.backgroundColor = '#ECECEC'
    if (myAudio.canPlayType('audio/mpeg')) {
        myAudio.setAttribute('src', sounds.W)
    } else {
        console.log('can not play sound')
    }
    if (power.checked) {
        // display sound being played if power is toggled on
        display.textContent = 'Heater 2'
        // play sound on button click if power is toggled on
        myAudio.play()
        display.style.backgroundColor = '#615E6E'
    } else {
        alert(`Power is on: ${power.checked}\nToggle power on`)
    }
})

E.addEventListener('click', function () {
    const myAudio = document.createElement('audio')
    // document.body.style.backgroundColor = '#ECECEC'
    if (myAudio.canPlayType('audio/mpeg')) {
        myAudio.setAttribute('src', sounds.E)
    } else {
        console.log('can not play sound')
    }
    if (power.checked) {
        // display sound being played if power is toggled on
        display.textContent = 'Heater 3'
        // play sound on button click if power is toggled on
        myAudio.play()
        display.style.backgroundColor = '#D5D3DD'
    } else {
        alert(`Power is on: ${power.checked}\nToggle power on`)
    }
})

A.addEventListener('click', function () {
    const myAudio = document.createElement('audio')
    // document.body.style.backgroundColor = '#ECECEC'
    if (myAudio.canPlayType('audio/mpeg')) {
        myAudio.setAttribute('src', sounds.A)
    } else {
        console.log('can not play sound')
    }
    if (power.checked) {
        // display sound being played if power is toggled on
        display.textContent = 'Heater 4'
        // play sound on button click if power is toggled on
        myAudio.play()
        display.style.backgroundColor = '#4F2BF0'
    } else {
        alert(`Power is on: ${power.checked}\nToggle power on`)
    }
})

S.addEventListener('click', function () {
    const myAudio = document.createElement('audio')
    // document.body.style.backgroundColor = '#ECECEC'
    if (myAudio.canPlayType('audio/mpeg')) {
        myAudio.setAttribute('src', sounds.S)
    } else {
        console.log('can not play sound')
    }
    if (power.checked) {
        // display sound being played if power is toggled on
        display.textContent = 'Clap'
        // play sound on button click if power is toggled on
        myAudio.play()
        display.style.backgroundColor = '#AA6ECD'
    } else {
        alert(`Power is on: ${power.checked}\nToggle power on`)
    }
})

D.addEventListener('click', function () {
    const myAudio = document.createElement('audio')
    // document.body.style.backgroundColor = '#ECECEC'
    if (myAudio.canPlayType('audio/mpeg')) {
        myAudio.setAttribute('src', sounds.D)
    } else {
        console.log('can not play sound')
    }
    if (power.checked) {
        // display sound being played if power is toggled on
        display.textContent = 'Open HH'
        // play sound on button click if power is toggled on
        myAudio.play()
        display.style.backgroundColor = '#84DCE9'  
    } else {
        alert(`Power is on: ${power.checked}\nToggle power on`)
    }
})

Z.addEventListener('click', function () {
    const myAudio = document.createElement('audio')
    // document.body.style.backgroundColor = '#ECECEC'
    if (myAudio.canPlayType('audio/mpeg')) {
        myAudio.setAttribute('src', sounds.Z)
    } else {
        console.log('can not play sound')
    }
    if (power.checked) {
        // display sound being played if power is toggled on
        display.textContent = 'Kick n\' Hat'
        // play sound on button click if power is toggled on
        myAudio.play()
        display.style.backgroundColor = '#E39D53'
    } else {
        alert(`Power is on: ${power.checked}\nToggle power on`)
    }
})

X.addEventListener('click', function () {
    const myAudio = document.createElement('audio')
    // document.body.style.backgroundColor = '#ECECEC'
    if (myAudio.canPlayType('audio/mpeg')) {
        myAudio.setAttribute('src', sounds.X)
    } else {
        console.log('can not play sound')
    }
    if (power.checked) {
        // display sound being played if power is toggled on
        display.textContent = 'Kick'
        // play sound on button click if power is toggled on
        myAudio.play()
        display.style.backgroundColor = '#8C6F52'
    } else {
        alert(`Power is on: ${power.checked}\nToggle power on`)
    }
})

C.addEventListener('click', function () {
    const myAudio = document.createElement('audio')
    // document.body.style.backgroundColor = '#ECECEC'
    if (myAudio.canPlayType('audio/mpeg')) {
        myAudio.setAttribute('src', sounds.C)
    } else {
        console.log('can not play sound')
    }
    if (power.checked) {
        // display sound being played if power is toggled on
        display.textContent = 'Closed HH'
        // play sound on button click if power is toggled on
        myAudio.play()
        display.style.backgroundColor = '#E4B14B'
    } else {
        alert(`Power is on: ${power.checked}\nToggle power on`)
    }
})

// play sound on keypress
document.addEventListener('keypress', function (e) {
    // get key pressed
    const keyName = e.key.toUpperCase()
    if (keyName === 'Q') {
        // create audio element and set the source attribute to 
        // corresponding mp3 file for the key
        const myAudio = document.createElement('audio')
        if (myAudio.canPlayType('audio/mpeg')) {
            myAudio.setAttribute('src', sounds.Q)
        } else {
            console.log('can not play sound')
        }
        if (power.checked) {
            // display sound being played if power is toggled on
            display.textContent = 'Heater 1'
            // play sound on button click if power is toggled on
            myAudio.play()
            display.style.backgroundColor = '#968DC3'  
        } else {
            alert(`Power is on: ${power.checked}\nToggle power on`)
        }
    }
})

document.addEventListener('keypress', function (e) {
    // get key pressed
    const keyName = e.key.toUpperCase()
    if (keyName === 'W') {
        // create audio element and set the source attribute to 
        // corresponding mp3 file for the key
        const myAudio = document.createElement('audio')
        if (myAudio.canPlayType('audio/mpeg')) {
            myAudio.setAttribute('src', sounds.W)
        } else {
            console.log('can not play sound')
        }
        if (power.checked) {
            // display sound being played if power is toggled on
            display.textContent = 'Heater 2'
            // play sound on button click if power is toggled on
            myAudio.play()
            display.style.backgroundColor = '#615E6E'
        } else {
            alert(`Power is on: ${power.checked}\nToggle power on`)
        }
    }
})

document.addEventListener('keypress', function (e) {
    // get key pressed
    const keyName = e.key.toUpperCase()
    if (keyName === 'E') {
        // create audio element and set the source attribute to 
        // corresponding mp3 file for the key
        const myAudio = document.createElement('audio')
        if (myAudio.canPlayType('audio/mpeg')) {
            myAudio.setAttribute('src', sounds.E)
        } else {
            console.log('can not play sound')
        }
        if (power.checked) {
            // display sound being played if power is toggled on
            display.textContent = 'Heater 3'
            // play sound on button click if power is toggled on
            myAudio.play()
            display.style.backgroundColor = '#D5D3DD'
        } else {
            alert(`Power is on: ${power.checked}\nToggle power on`)
        }
    }
})

document.addEventListener('keypress', function (e) {
    // get key pressed
    const keyName = e.key.toUpperCase()
    if (keyName === 'A') {
        // create audio element and set the source attribute to 
        // corresponding mp3 file for the key
        const myAudio = document.createElement('audio')
        if (myAudio.canPlayType('audio/mpeg')) {
            myAudio.setAttribute('src', sounds.A)
        } else {
            console.log('can not play sound')
        }
        if (power.checked) {
            // display sound being played if power is toggled on
            display.textContent = 'Heater 4'
            // play sound on button click if power is toggled on
            myAudio.play()
            display.style.backgroundColor = '#4F2BF0'
        } else {
            alert(`Power is on: ${power.checked}\nToggle power on`)
        }
    }
})

document.addEventListener('keypress', function (e) {
    // get key pressed
    const keyName = e.key.toUpperCase()
    if (keyName === 'S') {
        // create audio element and set the source attribute to 
        // corresponding mp3 file for the key
        const myAudio = document.createElement('audio')
        if (myAudio.canPlayType('audio/mpeg')) {
            myAudio.setAttribute('src', sounds.S)
        } else {
            console.log('can not play sound')
        }
        if (power.checked) {
            // display sound being played if power is toggled on
            display.textContent = 'Clap'
            // play sound on button click if power is toggled on
            myAudio.play()
            display.style.backgroundColor = '#AA6ECD'
        } else {
            alert(`Power is on: ${power.checked}\nToggle power on`)
        }
    }
})

document.addEventListener('keypress', function (e) {
    // get key pressed
    const keyName = e.key.toUpperCase()
    if (keyName === 'D') {
        // create audio element and set the source attribute to 
        // corresponding mp3 file for the key
        const myAudio = document.createElement('audio')
        if (myAudio.canPlayType('audio/mpeg')) {
            myAudio.setAttribute('src', sounds.D)
        } else {
            console.log('can not play sound')
        }
        if (power.checked) {
            // display sound being played if power is toggled on
            display.textContent = 'Open HH'
            // play sound on button click if power is toggled on
            myAudio.play()
            display.style.backgroundColor = '#84DCE9'  
        } else {
            alert(`Power is on: ${power.checked}\nToggle power on`)
        }
    }
})

document.addEventListener('keypress', function (e) {
    // get key pressed
    const keyName = e.key.toUpperCase()
    if (keyName === 'Z') {
        // create audio element and set the source attribute to 
        // corresponding mp3 file for the key
        const myAudio = document.createElement('audio')
        if (myAudio.canPlayType('audio/mpeg')) {
            myAudio.setAttribute('src', sounds.Z)
        } else {
            console.log('can not play sound')
        }
        if (power.checked) {
            // display sound being played if power is toggled on
            display.textContent = 'Kick n\' Hat'
            // play sound on button click if power is toggled on
            myAudio.play()
            display.style.backgroundColor = '#E39D53'
        } else {
            alert(`Power is on: ${power.checked}\nToggle power on`)
        }
    }
})

document.addEventListener('keypress', function (e) {
    // get key pressed
    const keyName = e.key.toUpperCase()
    if (keyName === 'X') {
        // create audio element and set the source attribute to 
        // corresponding mp3 file for the key
        const myAudio = document.createElement('audio')
        if (myAudio.canPlayType('audio/mpeg')) {
            myAudio.setAttribute('src', sounds.X)
        } else {
            console.log('can not play sound')
        }
        if (power.checked) {
            // display sound being played if power is toggled on
            display.textContent = 'Kick'
            // play sound on button click if power is toggled on
            myAudio.play()
            display.style.backgroundColor = '#8C6F52'
        } else {
            alert(`Power is on: ${power.checked}\nToggle power on`)
        }
    }
})

document.addEventListener('keypress', function (e) {
    // get key pressed
    const keyName = e.key.toUpperCase()
    if (keyName === 'C') {
        // create audio element and set the source attribute to 
        // corresponding mp3 file for the key
        const myAudio = document.createElement('audio')
        if (myAudio.canPlayType('audio/mpeg')) {
            myAudio.setAttribute('src', sounds.C)
        } else {
            console.log('can not play sound')
        }
        if (power.checked) {
            // display sound being played if power is toggled on
            display.textContent = 'Closed HH'
            // play sound on button click if power is toggled on
            myAudio.play()
            display.style.backgroundColor = '#E4B14B'
        } else {
            alert(`Power is on: ${power.checked}\nToggle power on`)
        }
    }
})
