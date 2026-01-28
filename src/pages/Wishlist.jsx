const CARD_CLASS =
  "group rounded-[28px] overflow-hidden bg-white border-2 border-pink-300 hover:border-pink-500 shadow-lg hover:shadow-[0_15px_40px_-10px_rgba(236,72,153,0.45)] hover:-translate-y-2 transition-all duration-300 ease-out";

export default function Wishlist({ wishlistItems, onToggleWishlist }) {
  return (
    <section className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-10">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Wishlist
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your saved beauty picks in one place.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="w-24 h-1 rounded-full bg-pink-500"></span>
          </div>
        </div>

        {wishlistItems.length === 0 ? (
          <p className="mt-12 text-center text-gray-600">
            Your wishlist is empty. Tap the heart on any product to add.
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className={CARD_CLASS}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <button
                    onClick={() => onToggleWishlist(item)}
                    aria-label="Remove from wishlist"
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-pink-300/60 text-pink-200 text-lg flex items-center justify-center hover:bg-pink-500/80 hover:text-white transition"
                  >
                    ♥
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {item.desc}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-pink-500">
                    ₹{item.priceValue.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

