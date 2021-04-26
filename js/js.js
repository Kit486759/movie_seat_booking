

let seat = document.getElementsByClassName("seat")
let selectSeat = document.getElementsByClassName("selectSeat")
let displayInfo = document.getElementsByClassName("displayInfo")[0]
let movieMenu = document.getElementById("movieMenu")
let movieOption = document.getElementsByClassName("movieOption")
let displayPrice = document.getElementsByClassName("displayPrice")[0]
// let seatWrap = document.getElementsByClassName("seatWrap")[0]




class Movie {
    constructor(title, type, price) {
        this._title = title;
        this._type = type;
        this._price = price;
    }

    get displayinfo() {
        return this._title + this._type + this._price;
    }

    addMovieMenu() {

        movieMenu.innerHTML += (`
        <option class="movieOption" value="${this._price}">${this._title} ($${this._price})</option>
        `)

    }

}

let endGame = new Movie("Avengers: Endgame", "Action, Scr-Fi", 12)
let godzilla = new Movie("Godzilla vs. Kong", "Action, Scr-Fi", 10)
let soundOfMetal = new Movie("Sound Of Metal", "Drama", 8)

endGame.addMovieMenu()
godzilla.addMovieMenu()
soundOfMetal.addMovieMenu()


let selectMovie = () => {
    let selectMovie = movieMenu.selectedIndex
    let showSelectMovie = movieMenu[selectMovie].innerText
    let moviePrice = movieMenu[selectMovie].value
    // console.log(`${showSelectMovie} ${moviePrice}`)
    // clear()
    displaySeat(showSelectMovie, moviePrice)
    // calPrice(price)
}

// let clear = () => {
//     location.reload()
// }

let price = 0

let displaySeat = (showSelectMovie, moviePrice) => {
    // seatWrap.innerHTML = (`${seatPlan}
    // `)
    
    if (showSelectMovie !== "------- Select movie -------") {
        displayInfo.innerHTML = (`${showSelectMovie}`)
        price = moviePrice
        return price
    }
    //  clickSeat(price)
}


let clickSeat = (evt) => {
    let clickSeatBtn = evt.target
    console.log(price)

if(movieMenu.selectedIndex === 0){
    alert("Please select a movie")
    return
}

    // console.log(price)
    if (clickSeatBtn.classList.value == "seat") {
        clickSeatBtn.classList.value = "selectSeat"
    } else if (clickSeatBtn.classList.value == "selectSeat") {
        clickSeatBtn.classList.value = "seat"
    }
    calPrice(price)
}

let calPrice = (price) => {
   
    
    totalPrice =+ (selectSeat.length * price) - price
    return displayPrice.innerHTML = (`<p>Total Price: $<p><span>${totalPrice}<span>`)
    // return displayInfo.innerHTML = (`${totalPrice}`)
}

for (let i = 0; i < seat.length; i++) {
    let seatBtn = seat[i];
    seatBtn.addEventListener("click", clickSeat);
}

movieMenu.addEventListener("change", selectMovie)

let saveData = (totalPrice)
localStorage.setItem("displaySeat" ,price)


