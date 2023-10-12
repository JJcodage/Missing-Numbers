//function to find missing numbuer
function missingNumber(arr, N) {
  let i; // variable for counting
  let temp = []; //temporary array for compairng
  for (i = 0; i <= N; i++) {
    temp[i] = 0;
  }

  for (i = 0; i < N; i++) {
    temp[arr[i] - 1] = 1;
  }

  let ans = 0;
  for (i = 0; i <= N; i++) {
    if (temp[i] == 0) ans = i + 1;
  }
  console.log(ans); //giving missing number
}

let input = prompt(
  'Enter numbers from 1 to 45 respectively. Write them in any order with a comma, one of which is missing. "ex: 1,2,3,4,5,7 OR ex2: 1,2,3,6,5,7,9,10,8" :'
);
let array = input.split(","); //We convert the received integers into an array unit by separating them from commas.

let lenghtArray = array.length; // array's length

// Calling function and controlling array length

if (lenghtArray > 45) {
  console.log("Try Again");
} else if (lenghtArray <= 0) {
  console.log("Try Again");
} else {
  missingNumber(array, lenghtArray);
}
