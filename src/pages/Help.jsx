const faqs = [
  {
    q: "How can I track my order?",
    a: "You will see tracking details in the Orders page once shipped.",
  },
  {
    q: "Can I cancel an order?",
    a: "Orders can be cancelled within 30 minutes of placing them.",
  },
  {
    q: "Do you offer free delivery?",
    a: "Yes, free delivery on orders above ₹499.",
  },
  {
    q: "Are products genuine?",
    a: "All items are 100% authentic and sourced from trusted partners.",
  },
  {
    q: "How do I contact support?",
    a: "Use the Contact page or email support@nykaa-clone.com.",
  },
];

export default function Help() {
  return (
    <section className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-5xl mx-auto px-10">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Help & FAQ
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Quick answers to common questions.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="w-24 h-1 rounded-full bg-pink-500"></span>
          </div>
        </div>

        <div className="mt-12 space-y-6">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="bg-white border border-pink-100 rounded-2xl p-6 shadow-md"
            >
              <h3 className="text-lg font-semibold text-pink-500">
                {item.q}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

