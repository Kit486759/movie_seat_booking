let seat = document.getElementsByClassName("seat")
let selectSeat = document.getElementsByClassName("selectSeat")
let displayInfo = document.getElementsByClassName("displayInfo")[0]
let movieMenu = document.getElementById("movieMenu")
let movieOption = document.getElementsByClassName("movieOption")




class Movie {
    constructor(title, price) {
        this._title = title;
        this._price = price;
    }

    get displayinfo() {
        return this._title + this._price;
    }

    addMovieMenu() {

        movieMenu.innerHTML += (`
        <option class="movieOption" value="${this._price}">${this._title} </option>
        `)

    }

}

let endGame = new Movie("Endgame", 12)
let godzilla = new Movie("Godzilla", 10)
let soundOfMetal = new Movie("Sound Of Metal", 8)

endGame.addMovieMenu()
godzilla.addMovieMenu()
soundOfMetal.addMovieMenu()


let selectMovie = () => {
    let selectMovie = movieMenu.selectedIndex
    let showSelectMovie = movieMenu[selectMovie].innerText
    console.log(showSelectMovie)
    displayInfo.innerHTML = (`${showSelectMovie}`)
}


movieMenu.addEventListener("change", selectMovie)

let clickSeat = (evt) => {
    let clickSeatBtn = evt.target
    
    if (clickSeatBtn.classList.value == "seat") {
        clickSeatBtn.classList.value = "selectSeat"
    } else if (clickSeatBtn.classList.value == "selectSeat") {
        clickSeatBtn.classList.value = "seat"
    }
    calPrice()
    console.log(clickSeatBtn)
}

let calPrice = () => {
    let totalPrice = 0
    for (let i = 0; i < movieOption.length; i++) {
        let moviePrice = movieOption[i].value
        totalPrice += selectSeat.length * moviePrice
    }
    // console.log(moviePrice)
    return displayInfo.innerHTML = (`${totalPrice}`)
}

for (let i = 0; i < seat.length; i++) {
    let seatBtn = seat[i];
    seatBtn.addEventListener("click", clickSeat);
}




