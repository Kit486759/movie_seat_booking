

let seat = document.querySelectorAll(".row .seat:not(.booked)")

let seatWrap = document.querySelector(".seatWrap")
let displayInfo = document.querySelector(".displayInfo")
let movieMenu = document.getElementById("movieMenu")
let displayPrice = document.querySelector(".displayPrice")




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


displayUI()
// let ticketPrice = movieMenu.value

let saveData = (movieIndex, moviePrice) => {
    localStorage.setItem("selectedMovieIndex", (movieIndex));
    localStorage.setItem("selectedMoviePrice", (moviePrice));
}




let calTotal = () => {

    let selectedSeat = document.querySelectorAll(".row .seat.selected")
    // console.log(selectedSeat.length)

    let seatsIndex = [...selectedSeat].map((seats) => {
        console.log([...seat].indexOf(seats))
        return ([...seat].indexOf(seats))
    })

    localStorage.setItem("selectedSeat", JSON.stringify(seatsIndex));

    let seatCount = selectedSeat.length
    totalPrice = + seatCount * movieMenu.value

    // console.log(ticketPrice)
    return displayPrice.innerHTML = (`<p>Total Price: $<p><span>${totalPrice}<span>`)
}

function displayUI() {

    // ============= get selected seats convert as number in array
    let selectedSeat = JSON.parse(localStorage.getItem("selectedSeat"))
    console.log(selectedSeat)

    // ============= if select seat array not 0 or less than 0
    if (selectedSeat !== null && selectedSeat.length > 0) {
        // ============= run all seat and 
        seat.forEach((seat, index) => {
            if (selectedSeat.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieMenu.selectedIndex = selectedMovieIndex;
    }
   


}


window.addEventListener("load" ,()=>{
    let showSelectMovie = movieMenu[movieMenu.selectedIndex].innerText
    displayInfo.innerHTML = (`${showSelectMovie}`)
    calTotal()
})

// ============= Listen the change of movie list
movieMenu.addEventListener("change", (evt) => {
// console.log(`${evt.target.selectedIndex}`)
console.log(movieMenu[evt.target.selectedIndex].innerText)
    displayInfo.innerHTML = (`${movieMenu[evt.target.selectedIndex].innerText}`)
    saveData(evt.target.selectedIndex, evt.target.value)
    calTotal()
})

// ============= Listen the button click of seats
seatWrap.addEventListener("click", (evt) => {
    // console.log(evt.target.classList)

    // ============= If not choose any movie return alert
    if (movieMenu.value == 0) {
        return alert("Please choose a movie")

    } else {
// ============= If the target is seat class but without book class
        if (evt.target.classList.contains("seat") && !evt.target.classList.contains("booked")) {
           
            // ============= toggle the  change to selected class
            evt.target.classList.toggle("selected")
            calTotal()
        }

    }


})
