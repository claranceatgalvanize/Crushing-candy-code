var store1 = require('./store1-data.js');

// *********** ACCESSING DATA *********** \\

// Return the value '4.63' from store1
function accessesingData1() {
  return store1['2015-01-08'][0][1];
}


// Return how many 'Mint Wafers' were sold on January 6th
function accessesingData2() {
  return store1['2015-01-06'][1][2]
}

// *********** LOOPING OVER DATA *********** \\


/* Create a loop to read which candies were sold by store1 on 
Jan 8. After simply outputting the data, try creating an 
array that contains the candy names.*/

function loopingData1() {
  let jan8th = store1['2015-01-08'];
  let jan8thCandies = [];
    for (let prop in jan8th) {
      jan8thCandies.push(jan8th[prop][0])
    }
  return jan8thCandies;
}


// Create a loop to count the total number of candies sold on Jan 10 at store1. Where do you have to initialize the counter variable? Why?
function loopingData2() {
  let jan10th = store1['2015-01-10'];
  let candyCount = 0;
  for (let i = 0; i < jan10th.length; i++) {
    candyCount += jan10th[i][2]
    }
  return candyCount;
}

// Use `Object.keys()` to get an array of the dates that candies were sold at store1.
function loopingData3() {
  let dateStold = Object.keys(store1);
  return dateStold;
}loopingData2();

// Use a loop to calculate the total number of candies sold at store1.
function loopingData4() {
  let candyCount = 0;
    for (let prop in store1) {
      let dates = store1[prop];
      for (let keys in dates){
        let candyNum = dates[keys]
        candyCount += candyNum[2]
      }
    }
  return candyCount;
}

// In the previous exercise, where did you have to initialize the counter variable? Why?
function loopingData5() {
  return 'I initialized my count variable right after my function declaration. I did this because I needed it to act as a global variable to both my nested loop and return statements'
}

// *********** CHALLENGE *********** \\

// Calculate the total revenue of the candies sold by store1 on January 10th.
// Be sure to return a number! Example `14.55`
function challenge1() {
  let totalRevenue = 0;
    for (let prop in store1) {
      let dates = store1[prop];
      for (let keys in dates){
        console.log(dates[keys])
        let daillyRevenue = dates[keys]
        // candyCount += candyNum[1]
      }
    }
  return totalRevenue;
}

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  loopingData3,
  loopingData4,
  loopingData5,
  challenge1
}
