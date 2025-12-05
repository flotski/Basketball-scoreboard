let homeScoreEl = document.querySelector("#home-score")
let guestScoreEl = document.getElementById("guest-score")

let countHome = 0
let countGuest = 0


function addOneHome(){
   countHome = countHome + 1
   homeScoreEl.textContent = countHome
}

function addTwoHome(){
   countHome = countHome + 2
   homeScoreEl.textContent = countHome
}

function addThreeHome(){
   countHome = countHome + 3
   homeScoreEl.textContent = countHome
}


function addOneGuest(){
   countGuest = countGuest + 1
   guestScoreEl.textContent = countGuest
}

function addTwoGuest(){
   countGuest = countGuest + 2
   guestScoreEl.textContent = countGuest
}

function addThreeGuest(){
   countGuest = countGuest + 3
   guestScoreEl.textContent = countGuest
}