// Write your classes below this line
class Item{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    
    search(){
        console.log(`Name: ${this.name} \n Price: ${this.price}`);
        return `Name: ${this.name} \n Price: ${this.price}`;
    }
}

class Cart {
    constructor(){
        this.items = [];
    }
    
    addToCart(item){
        this.items.push(item);
    }
    
    removeFromCart(itemName){
        this.items.splice(this.items.findIndex(name => name === itemName), 1);
    }
    
    total(){
        let totalCost = this.items.reduce((acc,val)=> {
           return acc + val; 
        }, 0);
        console.log(this.items, totalCost);
        return this.items.reduce((acc,val)=> {
           return acc + val; 
        }, 0);
    }
}

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.cart = new Cart;
        this.purchaseHistory = [];
        this.wishlist = [];
    }
    
    payment(){
        this.purchaseHistory.push(this.cart);
        this.cart = new Cart;
    }
    
    addToWishlist(item){
        this.wishlist.push(item);
    }
    
    removeFromWishlist(itemName){
        this.wishlist.splice(this.wishlist.findIndex(name => name === itemName), 1);
    }
}


console.log("Welcome to Minizon!");

let apple =new Item("apple", 200);
apple.search();
console.log(apple.search());

let Jay = new User("Jay", "jay@gmail.com");
Jay.cart.addToCart(apple);
Jay.cart.total();
Jay.cart.removeFromCart("apple");
Jay.cart.total();
// Test your code below this line by instantiating instances and invoking methods
