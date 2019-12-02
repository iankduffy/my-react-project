const fs = require('fs');
const loremHipsum = require('lorem-hipsum')

const title = () => 
  loremHipsum({
  count: 2,                      // Number of words, sentences, or paragraphs to generate.
  units: 'words',
  sentenceLowerBound: 5,         // Minimum words per sentence.
  sentenceUpperBound: 15,        // Maximum words per sentence.
  paragraphLowerBound: 3,        // Minimum sentences per paragraph.
  paragraphUpperBound: 7,        // Maximum sentences per paragraph.
  format: 'plain',               // Plain text or html// Custom word dictionary. Uses dictionary.words (in lib/dictionary.js) by default.,
  random: Math.random
})

const paragraph = () => 
  loremHipsum({
  count: 4,                      // Number of words, sentences, or paragraphs to generate.
  units: 'sentence',
  sentenceLowerBound: 5,         // Minimum words per sentence.
  sentenceUpperBound: 15,        // Maximum words per sentence.
  paragraphLowerBound: 3,        // Minimum sentences per paragraph.
  paragraphUpperBound: 7,        // Maximum sentences per paragraph.
  format: 'plain',               // Plain text or html// Custom word dictionary. Uses dictionary.words (in lib/dictionary.js) by default.,
  random: Math.random
})

const AMMOUNTOFPRODUCTS = 21

let productData = []

const writeFile = () => { 
  fs.writeFile("./data/product-data.json", JSON.stringify(productData), 'utf8', function (err) {
  if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
  }

  console.log("JSON file has been saved.");
})};

const createProductData = () => {
  for(let i = 0; i < AMMOUNTOFPRODUCTS; i++) {
    let data = {
      id: i, 
      productName: title(), 
      description: paragraph(),
      breweryInfo: paragraph(),
      price: "£5.00",
      rating: Math.floor(Math.random() * (5 - 0) + 0), 
      productImages: ["/Beer-Bottle.png", "/Beer-Bottle.png", "/Beer-Bottle.png", "/Beer-Bottle.png", "/Beer-Bottle.png"],
      reviews: []
    }
    productData = [...productData, data]
  }
  writeFile()
}

createProductData()

