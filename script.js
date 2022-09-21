let places = ["Anantapur", "Hyderabad", "Banglore"]

let place = places.some(function (ele) {
    return ele.startsWith("A")
})
console.log(place);