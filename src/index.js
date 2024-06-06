function orderTotal(order) {
  return order.items.reduce((prev, cur) => cur.price * cur.quantity + prev, 0);
}

if (
  orderTotal({
    items: [{ name: 'Dragon candy', price: 2, quantity: 3 }],
  }) !== 6
) {
  throw new Error('Check fail: Quantity');
}

if (
  orderTotal({
    items: [
      { name: 'Dragon food', price: 8 },
      { name: 'Dragon cage (small)', price: 800 },
    ],
  }) !== 808
) {
  throw new Error('Check fail: Happy path (Example 1)');
}

if (
  orderTotal({
    items: [
      { name: 'Dragon collar', price: 20 },
      { name: 'Dragon chew toy', price: 40 },
    ],
  }) !== 60
) {
  throw new Error('Check fail: Happy path (Example 2)');
}
