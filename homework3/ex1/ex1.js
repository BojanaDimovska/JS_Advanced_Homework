function Product(name, category, hasDiscount, price){
    this.name = name,
    this.category = category,
    this.hasDiscount = hasDiscount,
    this.price = price
}

let products = [
    new Product("Orange", "Food", false, 10),
    new Product("Chocolate", "Food", true, 15),
    new Product("Coffee", "Drinks", true, 50),
    new Product("Apple", "Food", false, 10),
    new Product("Juice", "Drinks", true, 20),
    new Product("Lime", "Food", true, 15),
    new Product("Chips", "Food", true, 40),
    new Product("Shampoo", "Hygene", false, 70),
    new Product("Deodorant", "Hygene", true, 100),
    new Product("Milk", "Drinks", true, 50),
    new Product("Cocoa", "Drinks", false, 20),
    new Product("Blouse", "Clothes", true, 250),
    new Product("Trousers", "Clothes", true, 300),
    new Product("Kiwi", "Food", false, 15),
    new Product("Trainers", "Clothes", false, 150)
];
console.log("All products with price greater than 20.")
let greaterThan20 = products.filter(product => product.price > 20);
console.log(greaterThan20);

console.log("All products that are on discount from category food");
let discountFoods = products.filter(product => product.hasDiscount == true).filter(product => product.category == "Food").map(product => product.name);
console.log(discountFoods);

console.log("Average price of all products that are on discount.");
let allDiscounts = products.filter(product => product.hasDiscount == true).map(product => product.price).reduce((sum, product) => sum += product, 0) / 9;
console.log(allDiscounts);

console.log("Name and price of all products with name starting with a vowel, that are not on discount.");
let startingWithAVowel = products.filter(product => product.hasDiscount == false && /[AEIOU]/.test(product.name[0])).forEach(product => console.log(product.name, product.price))
// console.log(startingWithAVowel)

console.log("Products by price ascending, without changing the original array");
let copyArray = products.map(product => product.price).sort((a, b) => a - b);
console.log(copyArray);
console.log(products);