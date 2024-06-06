// orderTotal is given an order and it outputs a total amount of all the
// items that are contained in that order
const someOrder = {
  items: [
    { name: 'Dragon food', price: 8, quantity: 8 },
    { name: 'Dragon cage (small)', price: 800, quantity: 2 },
  ],
};

const orderTotal = (order) =>
  order.items.reduce((prev, cur) => prev + (cur.price * cur.quantity), 0);

const result = orderTotal(someOrder);

console.log('end');
