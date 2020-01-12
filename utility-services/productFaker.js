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

const review = () => 
  loremHipsum({
  count: 1,                      // Number of words, sentences, or paragraphs to generate.
  units: 'sentence',
  sentenceLowerBound: 5,         // Minimum words per sentence.
  sentenceUpperBound: 15,        // Maximum words per sentence.
  paragraphLowerBound: 3,        // Minimum sentences per paragraph.
  paragraphUpperBound: 7,        // Maximum sentences per paragraph.
  format: 'plain',               // Plain text or html// Custom word dictionary. Uses dictionary.words (in lib/dictionary.js) by default.,
  random: Math.random
})

const typesOfProducts = ["ALE", "STOUT", "PILSNER", "CIDER"]

const AMMOUNTOFPRODUCTS = 150

let productData = []

const writeFile = () => { 
  fs.writeFile("./data/product-data.json", JSON.stringify({"productData": productData}), 'utf8', function (err) {
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
      price: (Math.random() * (4 - 0) + 2).toFixed(2),
      rating: Math.floor(Math.random() * (5 - 0) + 0), 
      productImages: ["/Beer-Bottle.png", "/Beer-Bottle.png", "/Beer-Bottle.png", "/Beer-Bottle.png", "/Beer-Bottle.png"],
      reviews: [review()], 
      type: typesOfProducts[Math.floor(Math.random() * (4 - 0) + 0)]
    }
    productData = [...productData, data]
  }
  writeFile()
}

createProductData()

