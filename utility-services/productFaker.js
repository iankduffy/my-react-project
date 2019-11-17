const fs = require('fs');

// const exampleData = {
//   "id": 0,
//   "productName": "Beer Name", 
//   "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
//   "price": "£5.00",
//   "rating": 1,
//   "productImages": ["/Beer-Bottle.png", "/Beer-Bottle.png", "/Beer-Bottle.png", "/Beer-Bottle.png", "/Beer-Bottle.png"]
// }

const AMMOUNTOFPRODUCTS = 20

let productData = []

const writeFile = () => { 
  fs.writeFile("output.json", JSON.stringify(productData), 'utf8', function (err) {
  if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
  }

  console.log("JSON file has been saved.");
})};

const createProductData = () => {
  for(let i = 0; i < AMMOUNTOFPRODUCTS; i++) {
    let data = {
      id: i + 1, 
      productName: `BEER ${i}`, 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      price: "£5.00",
      rating: Math.floor(Math.random() * (5 - 0) + 0), 
      productImages: ["/Beer-Bottle.png", "/Beer-Bottle.png", "/Beer-Bottle.png", "/Beer-Bottle.png", "/Beer-Bottle.png"]
    }
    productData = [...productData, data]
  }
  writeFile()
}

createProductData()

