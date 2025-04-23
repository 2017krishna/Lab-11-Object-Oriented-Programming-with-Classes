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

// Testing the ProductProperties class
const product1 = new ProductProperties("Milk", 0.5, 100);
const product2 = new ProductProperties("Cereal", 0.3, 150);

console.log(product1.toString());
console.log(`Total Value: $${product1.getTotalValue().toFixed(2)}`);

console.log(product2.toString());
console.log(`Total Value: $${product2.getTotalValue().toFixed(2)}`);