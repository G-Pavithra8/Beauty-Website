import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  // 🧠 Assume logged-in user email is stored
  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    if (!userEmail) return;

    const storedOrders =
      JSON.parse(localStorage.getItem(`orders_${userEmail}`)) || [];

    setOrders(storedOrders);
  }, [userEmail]);

  return (
    <section className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-5xl mx-auto px-10">
        <h1 className="text-5xl font-extrabold text-gray-800 text-center">
          Orders
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          Your order history
        </p>

        <div className="mt-10 space-y-6">
          {orders.length === 0 ? (
            <div className="text-center text-gray-500 border p-8 rounded-xl">
              No orders yet.
            </div>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                className="border rounded-2xl p-6 shadow-sm"
              >
                <div className="flex justify-between">
                  <p className="font-bold">{order.id}</p>
                  <span className="text-green-600 font-semibold">
                    {order.status}
                  </span>
                </div>

                <p className="text-sm text-gray-500">
                  {order.date}
                </p>

                <div className="mt-4 text-gray-700">
                  <p><b>Name:</b> {order.name}</p>
                  <p><b>Phone:</b> {order.phone}</p>
                  <p><b>Payment:</b> {order.paymentMethod}</p>
                  <p><b>Address:</b> {order.address}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
