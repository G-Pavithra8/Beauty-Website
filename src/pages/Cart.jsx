import { useNavigate } from "react-router-dom";

const CARD_CLASS =
  "group rounded-[28px] overflow-hidden bg-white border-2 border-pink-300 hover:border-pink-500 shadow-lg hover:shadow-[0_15px_40px_-10px_rgba(236,72,153,0.45)] hover:-translate-y-2 transition-all duration-300 ease-out";

export default function Cart({
  cartItems,
  onRemoveFromCart,
  onUpdateCartQty,
  isSignedIn,
}) {
  const navigate = useNavigate();
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.priceValue * item.qty,
    0
  );

  const formatPrice = (value) =>
    `₹${value.toLocaleString("en-IN")}`;

  return (
    <section className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-10">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Cart
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Review your beauty picks before checkout.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="w-24 h-1 rounded-full bg-pink-500"></span>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <p className="mt-12 text-center text-gray-600">
            Your cart is empty. Add some products to continue.
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className={`${CARD_CLASS} flex flex-col sm:flex-row gap-5 p-5`}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full sm:w-36 h-36 rounded-2xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {formatPrice(item.priceValue)}
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-sm">
                      <button
                        onClick={() =>
                          onUpdateCartQty(item.id, item.qty - 1)
                        }
                        className="w-8 h-8 rounded-full bg-pink-500 text-white hover:bg-pink-600"
                      >
                        -
                      </button>
                      <span className="px-2 text-gray-800">{item.qty}</span>
                      <button
                        onClick={() =>
                          onUpdateCartQty(item.id, item.qty + 1)
                        }
                        className="w-8 h-8 rounded-full bg-pink-500 text-white hover:bg-pink-600"
                      >
                        +
                      </button>
                      <button
                        onClick={() => onRemoveFromCart(item.id)}
                        className="ml-auto text-sm text-red-500 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`${CARD_CLASS} p-6 h-fit`}>
              <h3 className="text-xl font-semibold text-pink-500">
                Order Summary
              </h3>
              <div className="mt-6 flex justify-between text-sm text-gray-700">
                <span>Subtotal</span>
                <span className="font-semibold text-pink-500">
                  {formatPrice(totalAmount)}
                </span>
              </div>
              <div className="mt-2 flex justify-between text-sm text-gray-700">
                <span>Delivery</span>
                <span className="font-semibold text-gray-600">
                  Free
                </span>
              </div>
              <div className="mt-4 border-t border-pink-100 pt-4 flex justify-between text-base">
                <span className="text-gray-800">Total</span>
                <span className="font-semibold text-pink-500">
                  {formatPrice(totalAmount)}
                </span>
              </div>
              <button
                onClick={() =>
                  navigate(isSignedIn ? "/payment" : "/signin", {
                    state: { from: "/payment" },
                  })
                }
                className="mt-6 w-full bg-pink-500 text-white py-3 rounded-full font-semibold hover:bg-pink-600 transition"
              >
                Continue to Payment
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

