// <!-- first of all call back hell and pyramid of dom is same . pyramid of dom is like
// the concept of the Document Object Model (DOM) hierarchy in the form of a
// pyramid. -->

// <!-- now first i want to tell you about call back function . function is called after completion of its work  -->

// <!-- now suppose we have a cart -->
cart = ["shoes", "pants", "watches"];

//  <!-- we have a func createOrder and after this we have paymentOrder function but paymentOrder only run after createOrder function completed  -->

// api.createOrder(){

//  }

// api.paymentOrder(){

// }

// <!-- apply callback -->

api.createOrder(cart, function () {
  api.paymentOrder();
});

// now whats happening here js engine only run createOrder function and this is responsibility of createOrder to create an order and after this call the payment irder function

// create another funtion

api.createOrder(cart, function (){
    api.paymentOrder(function (){
        api.showOrder(function () {
            api.updateWallet(function () {
                api.recipt();
            });
        });
    });
});

// we can see the hirarchi follow here every funtion is totally depend on other func
// this is showing the pyramid of DOM
// another prob will cause here what if createOrder function we blindly trust on it ,will not call back our function 
// to avoid this we have to use promises like async await 

async function processOrder() {
    try {
      await api.createOrder(cart);
      await api.paymentOrder();
      await api.showOrder();
      await api.updateWallet();
      await api.recipt();
    } catch (error) {
      // Handle errors appropriately
      console.error(error);
      // Notify user or take other necessary actions
    }
  }
  
  // Call the function to initiate the order processing
  processOrder();

//   GENERATOR FUNCTION 
// its like when we want a function we cant it store it anywhere we just generator at that point and apply it
// By using yield, you can pause execution and wait for asynchronous operations to complete.
// Values can be sent back to the generator using the next method.

function* numberGen(){
    let i=0
    // yield 1
    // yield 2
    // yield 3
    // or if we want imfinite 
    while (true){ 
        yield i++
    }
}
const gen = numberGen()
console.log(gen(next()))
console.log(gen(next()))
console.log(gen(next())) 
