class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        return this.price * this.quantity;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }

    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price -= product.price * discount;
        });
    }
}

class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}

class Store {
    constructor() {
        this.inventory = [];
    }

    addProduct(product) {
        this.inventory.push(product);
    }
}

// Testing the ProductProperties class
const product1 = new ProductProperties("Milk", 0.5, 100);
const product2 = new ProductProperties("Cereal", 0.3, 150);

console.log(product1.toString());
console.log(`Total Value: $${product1.getTotalValue().toFixed(2)}`);

console.log(product2.toString());
console.log(`Total Value: $${product2.getTotalValue().toFixed(2)}`);

// Testing the PerishableProductProperties class
const perishable1 = new PerishableProductProperties("Strawberries", 3.5, 20, "2025-04-30");
const perishable2 = new PerishableProductProperties("Lettuce", 1.0, 40, "2025-04-25");

console.log(perishable1.toString());
console.log(`Total Value: $${perishable1.getTotalValue().toFixed(2)}`);

console.log(perishable2.toString());
console.log(`Total Value: $${perishable2.getTotalValue().toFixed(2)}`);

// Testing the applyDiscount static method
const products = [product1, product2, perishable1, perishable2];
console.log("Before Discount:");
products.forEach(product => console.log(product.toString()));

ProductProperties.applyDiscount(products, 0.1); // Apply a 10% discount

console.log("After 10% Discount:");
products.forEach(product => console.log(product.toString()));