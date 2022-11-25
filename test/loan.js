let creditLimit = 5000;

/*
 * Input: number of dollars to loan out
 * Returns: Promise of loan which may or may not fulfill, based on remaining credit. 
 * If creditLimit is less than the requested amount, only the remaining limit is loaned out, otherwise the full amount is loaned out. If $0 remain in the limit, the loan request is rejected (error!).
 */
const loanOut = function(amount) {
  let remainingBalance = 0;
  return new Promise((resolve, reject) => {
    remainingBalance = creditLimit - amount;
    if (remainingBalance > 0) {
      resolve(amount);
  
  } else { reject(amount); }
});
};


loanOut(1200) //promise call
  .then((amountReceived) => { // promise chain
    console.log(`\t-> I got $${amountReceived} loan from the bank! Remaining Credit Limit: $${4850}`);
  })
  .catch((err) => { //rejection catch 
    console.log(`\t-> Error: ${err}!`);
  });