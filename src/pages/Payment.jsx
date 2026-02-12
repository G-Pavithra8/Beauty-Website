import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Payment({ isSignedIn }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Redirect if not signed in
  useEffect(() => {
    if (!isSignedIn) {
      navigate("/signin", { state: { from: "/payment" } });
    }
  }, [isSignedIn, navigate]);

  // Prefill email from localStorage
  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setForm((prev) => ({ ...prev, email: userEmail }));
    }
  }, []);

  // Validation
  const validate = () => {
    const newErrors = {};

    if (!/^[A-Za-z\s]+$/.test(form.name))
      newErrors.name = "Name should contain only alphabets";

    if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Enter a valid email address";

    if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Phone number must be 10 digits";

    if (form.address.trim().length < 10)
      newErrors.address = "Address must be at least 10 characters";

    if (!form.paymentMethod)
      newErrors.paymentMethod = "Select a payment method";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit order
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

  const userEmail = localStorage.getItem("userEmail");

    if (!userEmail) {
      alert("Email is missing!");
      return;
    }

    // ✅ Create new order
    const newOrder = {
      id: "ORD-" + Date.now(),
      name: form.name,
      email: userEmail,
      phone: form.phone,
      address: form.address,
      paymentMethod: form.paymentMethod,
      date: new Date().toLocaleString(),
      status: "Placed",
    };

    const key = `orders_${userEmail}`;
    const existingOrders = JSON.parse(localStorage.getItem(key)) || [];

    // Store order in localStorage
    localStorage.setItem(key, JSON.stringify([...existingOrders, newOrder]));

    // Show success popup
    setSuccess(true);
  };

  return (
    <section className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-10">
        <h1 className="text-5xl font-extrabold text-gray-800 text-center">
          Payment
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Complete your order securely
        </p>

        {/* FORM */}
        <div className="mt-12 bg-white border-2 border-pink-300 rounded-3xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg bg-gray-100 cursor-not-allowed"
              value={form.email}
              readOnly
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })
              }
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}

            <textarea
              placeholder="Delivery Address"
              className="w-full p-3 border rounded-lg"
              rows="3"
              value={form.address}
              onChange={(e) =>
                setForm({ ...form, address: e.target.value })
              }
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}

            <div>
              <p className="font-semibold mb-2">Payment Method</p>
              <div className="flex gap-6 flex-wrap">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="Google Pay"
                    onChange={(e) =>
                      setForm({ ...form, paymentMethod: e.target.value })
                    }
                  />
                  Google Pay
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="Wallet"
                    onChange={(e) =>
                      setForm({ ...form, paymentMethod: e.target.value })
                    }
                  />
                  Paytm / Amazon Pay
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="COD"
                    onChange={(e) =>
                      setForm({ ...form, paymentMethod: e.target.value })
                    }
                  />
                  Cash on Delivery
                </label>
              </div>
              {errors.paymentMethod && (
                <p className="text-red-500 text-sm">{errors.paymentMethod}</p>
              )}
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="w-1/2 py-3 rounded-full border-2 border-pink-500 text-pink-600 font-semibold hover:bg-pink-50 transition"
              >
                ← Back
              </button>

              <button
                type="submit"
                className="w-1/2 py-3 rounded-full bg-pink-600 text-white font-semibold hover:bg-pink-700 transition"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>

        {/* SUCCESS POPUP */}
        {success && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-10 w-[90%] max-w-md text-center shadow-2xl">
              <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
                <span className="text-4xl text-green-600">✔</span>
              </div>

              <h2 className="text-2xl font-extrabold text-gray-800">
                Order Successful!
              </h2>

              <p className="mt-2 text-gray-600">
                Your order has been placed successfully.
              </p>

              <button
                onClick={() => window.location.reload()}
                className="mt-8 w-full py-3 rounded-full bg-pink-600 text-white font-semibold hover:bg-pink-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
