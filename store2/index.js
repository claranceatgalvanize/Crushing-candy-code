var store2 = require('./store2-data.js');

/////////// ACCESSING DATA ///////////

// Set the sale dates for 'Banana Bunches' from store2 to a variable, then return that variable
function accessesingData1() {
  return store2['sale dates']['Banana Bunches'];
}

// Using a built-in array property return the total sale dates there are for store2's 'Banana Bunches'
function accessesingData2() {
  return store2['sale dates']['Banana Bunches'].length;
}

/////////// UPDATING DATA ///////////

// Set a variable to equal the prices of the 'Mint Wafers' in store2. Then reassign it to a new value. When you update your new variable, does the price in the store2 data change? Return your answer as a boolean and write a comment on why or why not.
function updatingData1() {
 var mintWaferPrice = store2['inventory prices']['Mint Wafers'] = 3;
 mintWaferPrice = 5;
 if (!mintWaferPrice){
   return true;
 } else {
   return false;
 }
 // The value of mint wafers didn't update in the parent file because I only change the value of the variable it was stored in. 
}

// Set a variable equal to the 'Caramel Twists' sale dates in store2. Use pop to remove one of the sale dates for store2's 'Caramel Twists'. Does your variables value match up with what is in store2? Return your answer as a boolean and write a comment on why or why not.
function updatingData2() {
  let carameTwistSaleDate = store2['sale dates']['Caramel Twists'];
  return carameTwistSaleDate.pop() ? true : fale;
  // console.log(carameTwistSaleDate)
}

/////////// LOOPING OVER DATA ///////////

// Iterate over the store2 sale dates for 'Caramel Twists'. Use this to create an object containing dates as the key and the value as the quantity sold on that day.
// Example:
// {
//   '2014-11-19': 4,
//   '2014-11-20': 3,
// }
function loopingData1() {
  let dailySale = {} // initialize output;
    let day = store2['sale dates']['Caramel Twists'] // get days;
    for (let i = 0; i < day.length; i++) { // iterate over days;
      !dailySale[day[i]] ? dailySale[day[i]] = 1 : dailySale[day[i]]++; // check if output has current day, increament; other wise assign it 1.
    }
  return dailySale;
}

// Iterate over store2's sale dates data to find which day had the most total number of sales. Return the date with the most sales.
function loopingData2() {
  let mostDailySale = 0; // initialize output;

    let dailySale = {} // amount per day
    let day = store2['sale dates']['Caramel Twists'] // get days;
    for (let i = 0; i < day.length; i++) { // iterate over days;
      !dailySale[day[i]] ? dailySale[day[i]] = 1 : dailySale[day[i]]++; // check if output has current day, increament; other wise assign it 1.
    }
    
    let keyValue = Object.entries(dailySale)
    let currentKeyValue = keyValue[0][1];
    for (let i = 0; i < keyValue.length; i++){
      
      if (keyValue[i][1] > currentKeyValue) {
        mostDailySale = keyValue[i][0]
      }

    }

  return mostDailySale;
}
    


/////////// CHALLENGE ///////////

// Create and return an object containing the amounts that store2 made by selling each type of candy. Round each number to 2 decimal points.
// Example:
// {
//   'Caramel Twists': 14.15,
//   'Peppermint Poppers': 20.51
// }
function challenge1() {

}

module.exports = {
  accessesingData1,
  accessesingData2,
  updatingData1,
  updatingData2,
  loopingData1,
  loopingData2,
  challenge1
}
