var store3 = require('./store3-data.js');

//()()()()() ACCESSING DATA ()()()()()\\

// Return Berry Bites data for store3 on January 7.
function accessesingData1() {
 return store3[1]['inventory sold']['Berry Bites'];
}

// Return how many Mint Wafers were sold on January 9th
function accessesingData2() {
  return store3[3]['inventory sold']['Mint Wafers']['quantity'];
}

// Return total number of dates included in the dataset.
function accessesingData3() {
  return store3.length;
}

//()()()()() LOOPING OVER DATA ()()()()()\\

// Create a loop to iterate over the sale data from store3. Use this loop to return an array of dates contained in the sale data.
function loopingData1() {
let dates = [];
  for (let i = 0; i < store3.length; i++) {
    dates.push(store3[i].date)
  }
return dates;
}

// Use `Object.keys()` to loop over the inventory sold for January 10th in store3. While iterating over the data, create an object containing each candy's name and price. Return the result.
// Example:
// {
//   'Dark Chocolate Crunchies': 1.30,
//   'Mint Wafers': 1.40,
//   ...
// }
function loopingData2() {
  let candyNameAndPrice = {};

    let dayInvenArr = Object.keys(store3[4]['inventory sold']);

    for (let i = 0; i < dayInvenArr.length; i++){
      !candyNameAndPrice[dayInvenArr[i]] ? candyNameAndPrice[dayInvenArr[i]] = 
        store3[4]['inventory sold'][dayInvenArr[i]]['cost'] : candyNameAndPrice = {};
    }

  return candyNameAndPrice;
}

// Create a loop to iterate over the whole store3 variable to find out how many Peanut Butter Buttered Peanuts were sold over all dates. Return the result.
function loopingData3() {
  let peanutButterSold = 0
    for(let i = 0; i < store3.length; i++) {
      let qty = store3[i]['inventory sold']['Peanut Butter Buttered Peanuts']['quantity'];
      Object.keys(qty) ? peanutButterSold += qty : peanutButterSold = 0;
    }
  return peanutButterSold;
}

//()()()()() CHALLENGE ()()()()()\\

// Determine how much money store3 made on January 9th and return the result fixed to two decimal points
function challenge1() {

}

module.exports = {
  accessesingData1,
  accessesingData2,
  accessesingData3,
  loopingData1,
  loopingData2,
  loopingData3,
  challenge1
}
