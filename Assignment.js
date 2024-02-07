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
// const ticketsSold = -15;
// const lastAmount = calculateMoney(ticketsSold);
// console.log(lastAmount)

// problem-2 //

// function checkName(name){
// if(typeof name !== 'string'){
//     return 'invalid'
// }
// const lowerCaseName = name.toLowerCase()
// const jewel = test.includes(checkName('a','y','i','e','o','u','w')lowerCaseName);

// if(name.includes(lowerCaseName) && (jewel)){
//     return 'Good Name';
// }
// else{
//     return 'Bad Name';
// }
// }
// const result = 'habib'
// const final = checkName(result)
// console.log(final)


// problem-3//

// function deleteInvalids(array){
// if(!Array.isArray(array)){
//     return 'Invalid Array'
// }
// const resultArray = array.filter(element => typeof element === 'number' && !isNaN(element));
// return resultArray;
// }

// const jewel = {num: [ 1 , 2 , 3 ]};
// const evan = deleteInvalids(jewel);
// console.log(evan)

// problem-4//

function password(obj){
    if(typeof obj !== 'object' || !obj. details ('name') || !obj. details ('birthYear') || !obj. details ('siteName') || typeof obj.name !== 'sting' || typeof obj.siteName !=='string' || typeof obj.birthYear !== 'number'){
        return "thik thak info. de"
    }
 
const password = `${obj.siteName.toUpperCase().charAt(0)}#${obj.name}@${obj.birthYear}`;
return password;
 
}






  const result ={
    name : "kolimuddin",
    birthYear : 1999,
    siteName : "google"
   };
   const final = password(result);
console.log(final);