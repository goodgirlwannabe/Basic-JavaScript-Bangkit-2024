// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders;
orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const order = {
    id: generateUniqueId(),
    customerName,
    items,
    status: 'Belum dibayar',
    createdAt: new Date().toISOString(),
  };
  orders.push(order);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.find(order => order.id === orderId);
  if (order) {
    order.status = status;
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === 'Selesai')
    .reduce((acc, order) => {
      return acc + order.items.reduce((acc, item) => {
        return acc + item.price;
      }, 0);
    }, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
