// Write your solution in this file!
var customerName= 'bob';

function upperCaseCustomerName() {
  if (customerName) {
    customerName = customerName.toUpperCase();
  }
}

function setBestCustomer() {
  bestCustomer = 'not bob';  
}

function overwriteBestCustomer() {
  bestCustomer = 'Maybe bob';
}

const leastFavoriteCustomer = 'Jerry';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Barry';
}
