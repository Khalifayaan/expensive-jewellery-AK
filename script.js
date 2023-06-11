


function findMostExpensiveJewelry(jewelry) {
  let mostExpensiveJewelry = '';
  let highestPrice = 0;

  for (let i = 0; i < jewelry.length; i++) {
    let currentJewelry = jewelry[i];
    let currentPrice = currentJewelry.price;

    if (currentPrice > highestPrice) {
      highestPrice = currentPrice;
      mostExpensiveJewelry = currentJewelry.name;
    }
  }

  return "The most expensive one is the " + mostExpensiveJewelry + ".";
}

const jewelry = [
  { name: 'Sapphires Ring', price: 1600 },
  { name: 'Gold earrings', price: 1500 },
  { name: 'Diamond necklace', price: 1400 },
  { name: 'Emeralds anklet', price: 1200 }
];

console.log(findMostExpensiveJewelry(jewelry));