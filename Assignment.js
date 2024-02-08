// Problem-1 //

// function calculateMoney(ticketSale){
//     if(ticketSale > 0){
//         const perTicketPrice = 120;
//     const darwanBill = 500;
//     const perPersonLaunchCost = 50;
//     const stuffNumber = 8;
//     const totalIncome = ticketSale * perTicketPrice;
//     const extraBill = darwanBill + (perPersonLaunchCost * stuffNumber);
//     const finalAmount = totalIncome - extraBill;
    
//     return finalAmount;
//     }
//     else{
//         console.log("Invalid Number")
//     }

// }
// const ticketsSold = -130;
// const lastAmount = calculateMoney(ticketsSold);
// console.log(lastAmount)














// problem-2 //

function checkName(name){
if(typeof name !== 'string'){
    return 'invalid'
}
const lowerCaseName = name.toLowerCase()
const jewel = test.includes(checkName('a','y','i','e','o','u','w')lowerCaseName);

if(name.includes(lowerCaseName) && (jewel)){
    return 'Good Name';
}
else{
    return 'Bad Name';
}
}
const result = 'habib'
const final = checkName(result)
console.log(final)








function checkName(name) {
  // Check if the input is a string
  if (typeof name !== 'string') {
    return 'invalid';
  }

  // Remove leading and trailing spaces and convert to lowercase
  const cleanedName = name.toLowerCase();

  // Check if the name ends with A, y, i, e, o, u, w
  if (cleanedName.endsWith('a') || cleanedName.endsWith('y') || cleanedName.endsWith('i') || cleanedName.endsWith('e')
   || cleanedName.endsWith('o') || cleanedName.endsWith('u') || cleanedName.endsWith('w')) {
    return 'Good Name';
  } else {
    return 'Bad Name';
  }
}
console.log(checkName('tonmy'))




















// problem-3//

// function deleteInvalids(array){
// if(!Array.isArray(array)){
//     return "Invalid Array"
// }
// const resultArray = array.filter(element => typeof element === 'number' && !isNaN(element));
// return resultArray;
// }

// const jewel = {num: [ 1 , 2 , 3 ]} ;
// const evan = deleteInvalids(jewel);
// console.log(evan)






































//problem-4//

// function password(obj){
  
// if (!obj || typeof obj !== 'object' || !obj.name || !obj.birthYear || !obj.siteName 

// || typeof obj.name !== 'string'  || typeof obj.siteName !== 'string' 
// || typeof obj.birthYear !== 'number' ||
// obj.birthYear < 1000 ||
// obj.birthYear >= 10000
// ) {
// return 'invalid';
// }
 
// const password = `${obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1)}#${obj.name}@${obj.birthYear}`;
// return password;
 
// }




//   const result ={
//     name : "jewel",
//     birthYear : 2002,
//     siteName : "facebook"
//    };
//    const final = password(result);
// console.log(final);








































 

// problem-5 //

// function  monthlySavings(arr, livingCost){

//   if(!Array.isArray(arr) || typeof livingCost !=='number'){
//     return "invalid input";
//   }

//  let payment = 0; 
//   for (let i = 0; i < arr.length; i++){ 
//     payment += arr[i];
// }

//  let govementText = payment >= 3000 ? payment * 0.2 : 0;
//  let totalPayment = payment - govementText;

// let savings = totalPayment - livingCost;
  
//   if(savings >= 0){
//     return savings;
//   }
//   else if(savings < 0){
//     return "more earn"
//   } 
// }


