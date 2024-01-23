const home = document.getElementById("home")
const guest = document.getElementById("guest")
let countHome = 0
let countGuest = 0

function plusOneHome () {
    countHome += 1
    home.textContent = countHome
}

function plusTwoHome () {
    countHome += 2
    home.textContent = countHome
}

function plusThreeHome () {
    countHome += 3
    home.textContent = countHome
}

function plusOneGuest () {
    countGuest += 1
    guest.textContent = countGuest
}

function plusTwoGuest () {
    countGuest += 2
    guest.textContent = countGuest
}

function plusThreeGuest () {
    countGuest += 3
    guest.textContent = countGuest
    
}