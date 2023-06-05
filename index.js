

displayAllShoes()

function displayAllShoes () {
/* The table will display all the shoes available 
in our store

1. Get all shoes
2. Display each shoe
*/
getAllShoes()
.then(shoes => shoes.forEach(shoe => displayOneShoe(shoe)))
}

function getAllShoes() {
    // get access to the array of shoes in the db.json
    return fetch("http://localhost:3000/shoes")
    .then(response => response.json())
    .then(shoes => shoes)
}


function displayOneShoe(shoe) {
console.log("i should display", shoe)
// 1. Make a shoe
// 2. Append the shoe to the dom
const shoeCell = document.createElement("li") 
const image = document.createElement("img");
image.src = shoe.image
shoeCell.append(image)
console.log(image)
const shoeGrid = document.getElementById("shoeGrid");
shoeGrid.append(shoeCell)

}