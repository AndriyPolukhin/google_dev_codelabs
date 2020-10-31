const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

// let bank_balance = 303.91;
let bank_balance = prompt('Please enter your bank balance: ');
let amount = 0;

const calculateTax = (amount) => amount * TAX_RATE;

const formatAmount = (amount) => '$' + amount.toFixed(2);

while (amount < bank_balance) {
  amount = amount + PHONE_PRICE;

  if (amount < SPENDING_THRESHOLD) {
    amount = amount + ACCESSORY_PRICE;
  }
}

amount = amount + calculateTax(amount);

console.log('Your purchase: ' + formatAmount(amount));

if (amount > bank_balance) {
  console.log("You can't afford this purchase.");
}
