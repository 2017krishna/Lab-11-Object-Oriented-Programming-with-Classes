class ProductProperties { // Class representing a generic product with properties like name, price, and quantity
    constructor(name, price, quantity) {
        this.name = name; // Name of the product
        this.price = price; // Price of the product
        this.quantity = quantity; // Quantity available in stock
    }

    getTotalValue() {
        return this.price * this.quantity; // Calculates total value (price * quantity)
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`; // Returns product details as a string
    }

    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price -= product.price * discount; // Reduces product price by the discount percentage
        });
    }
}

class PerishableProductProperties extends ProductProperties { // Class representing a perishable product with an expiration date
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity); // Calls the parent class constructor
        this.expirationDate = expirationDate; // Expiration date of the product
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`; // Adds expiration date to the product details
    }
}

class Store { // Class representing a store that manages an inventory of products
    constructor() {
        this.inventory = []; // Array to store products
    }

    addProduct(product) {
        this.inventory.push(product); // Adds a product to the inventory
    }

    getInventoryValue() {
        return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0); // Calculates total value of all products
    }

    findProductByName(name) {
        return this.inventory.find(product => product.name === name) || null; // Finds a product by name or returns null
    }
}

// Testing the Store class

// Creating all products
const product1 = new ProductProperties("Milk", 0.5, 100); // Creates a product: Milk
const product2 = new ProductProperties("Cereal", 0.3, 150); // Creates a product: Cereal
const product3 = new ProductProperties("Eggs", 2.5, 60); // Creates a product: Eggs
const perishable1 = new PerishableProductProperties("Strawberries", 3.5, 20, "2025-04-30"); // Creates a perishable product: Strawberries
const perishable2 = new PerishableProductProperties("Lettuce", 1.0, 40, "2025-04-25"); // Creates a perishable product: Lettuce

// Creating a new store
const store = new Store(); // Creates a new store

// Adding all products to the store
store.addProduct(product1); // Adds Milk to the store
store.addProduct(product2); // Adds Cereal to the store
store.addProduct(product3); // Adds Eggs to the store
store.addProduct(perishable1); // Adds Strawberries to the store
store.addProduct(perishable2); // Adds Lettuce to the store

// Displaying total inventory value before discount
console.log(`Total Inventory Value Before Discount: $${store.getInventoryValue().toFixed(2)}`); // Logs total inventory value before discount

// Applying a 15% discount to all products in the store
ProductProperties.applyDiscount(store.inventory, 0.15); // Apply a 15% discount to all products

// Displaying total inventory value after discount
console.log(`Total Inventory Value After 15% Discount: $${store.getInventoryValue().toFixed(2)}`); // Logs total inventory value after discount

// Finding and printing the details of a specific product by its name
const productNameToFind = "Cereal"; // The product name to search for
const foundProduct = store.findProductByName(productNameToFind); // Searches for the product in the store
if (foundProduct) {
    console.log(`Found Product: ${foundProduct.toString()}`); // Logs the details of the found product
} else {
    console.log(`Product "${productNameToFind}" not found in the store.`); // Logs if the product is not found
}