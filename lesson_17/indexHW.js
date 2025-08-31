const product1 = {
    name: "Notebook Lenovo ThinkPad",
    description: "CPU: Intel Core i7, RAM: 16GB, SSD: 512GB",
    price: 1283,
    info: function () {
        console.log(`product: ${this.name}; price: ${this.price}; description: ${this.description}`);
    }
};
product1.info();

   
const product2 = {
    name: "Smartphone Samsung Galaxy S22",
    description: "Display: 6.1\", RAM: 8GB, Storage: 256GB",
    price: 999,
    info: function () {
        console.log(`product: ${this.name}; price: ${this.price}; description: ${this.description}`);
    }
};
product2.info();

const product3 = {
    name: "Wireless Headphones Sony WH-1000XM5",
    description: "Noise Cancelling, Battery Life: 30h",
    price: 399,
    info: function () {
        console.log(`product: ${this.name}; price: ${this.price}; description: ${this.description}`);
    }
};
product3.info();


function Product(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.info = function () {
        console.log(`product: ${this.name}; price: ${this.price}; description: ${this.description}`);
    };
}

const product4 = new Product("Tablet Apple iPad Air", "Display: 10.9\", Storage: 256GB, Chip: M1", 799);
const product5 = new Product("Monitor LG UltraFine", "Size: 27\", Resolution: 4K UHD", 599);



const products = [product1, product2, product3, product4, product5];


function printAllProducts(products) {
    products.forEach((product, index) => {
        console.log(`Product ${index + 1}`);
        for (let key in product) {
            if (typeof product[key] === "function") {
                console.log(`${key}: ${product[key]()}`);
            } else {
                console.log(`${key}: ${product[key]}`);
            }
        }
        console.log("");
    });
}

printAllProducts(products);

const productJSON = JSON.stringify(product1);
console.log(productJSON)

let obj = JSON.parse(productJSON);
console.log(obj);


