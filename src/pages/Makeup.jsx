import { useNavigate } from "react-router-dom";

const products = [
  {
    id: "makeup-velvet-matte-lipstick",
    name: "Velvet Matte Lipstick",
    desc: "Rich pigment, soft finish",
    priceValue: 799,
    tag: "Trending",
    img: "https://th.bing.com/th/id/OIP.4SleSMMjDW0h9peSJYdheQHaHa?w=200&h=200&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: "makeup-luminous-foundation",
    name: "Luminous Foundation",
    desc: "Buildable coverage",
    priceValue: 1499,
    tag: "Best Seller",
    img: "https://th.bing.com/th/id/OIP.3HeOl5bBDIX0W9bxqzeCFAHaHa?w=167&h=180&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: "makeup-liquid-eyeliner",
    name: "Liquid Eyeliner",
    desc: "Smudge-proof",
    priceValue: 499,
    tag: "Sharp",
    img: "https://th.bing.com/th/id/OIP.Z98mxYLiKbkFPbrz2SsvIQHaHa?w=159&h=180&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: "makeup-mascara-volume-boost",
    name: "Mascara Volume Boost",
    desc: "Bold lashes",
    priceValue: 699,
    tag: "Drama",
    img: "https://th.bing.com/th/id/OIP.KtG51TOWVp2GxFShPrmsnAHaHa?w=188&h=188&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: "makeup-silky-blush",
    name: "Silky Blush",
    desc: "Natural flush",
    priceValue: 599,
    tag: "Glow",
    img: "https://th.bing.com/th/id/OIP.DyAXNPixs_dUbF5BGbn4TQHaHa?w=191&h=191&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: "makeup-highlighter-palette",
    name: "Highlighter Palette",
    desc: "Radiant sheen",
    priceValue: 999,
    tag: "Shine",
    img: "https://th.bing.com/th/id/OIP.9FyBJiUKZ2zXPWA7jr47hQHaHa?w=180&h=180&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: "makeup-nude-eyeshadow",
    name: "Nude Eyeshadow",
    desc: "Everyday glam",
    priceValue: 1099,
    tag: "New",
    img: "https://th.bing.com/th/id/OIP.wh4UWE4ew9VmwWy67-RgdgHaHa?w=171&h=180&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: "makeup-fixing-spray",
    name: "Makeup Fixing Spray",
    desc: "Long-wear hold",
    priceValue: 649,
    tag: "Stay",
    img: "https://th.bing.com/th/id/OIP.UA2BSPTscfodE6H4YmmSPgHaHa?w=198&h=198&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3",
  },
];

export default function Makeup({
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
}) {

    const navigate = useNavigate();

  const formatPrice = (value) =>
    `₹${value.toLocaleString("en-IN")}`;

  return (
    <section className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Makeup
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Iconic shades and luxe formulas for every look.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="w-24 h-1 rounded-full bg-pink-500"></span>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
            key={product.name}
            className="group rounded-[28px] overflow-hidden 
bg-white 
border-2 border-pink-300 hover:border-pink-500 
shadow-lg 
hover:shadow-[0_15px_40px_-10px_rgba(236,72,153,0.45)]
hover:-translate-y-2 
transition-all duration-300 ease-out"

          >
          
              <div className="relative h-52 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs uppercase tracking-widest bg-pink-500 text-white rounded-full">
                  {product.tag}
                </span>
                <button
                  onClick={() => onToggleWishlist(product)}
                  aria-label="Toggle wishlist"
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur border border-pink-300 text-pink-500 text-lg flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
                >
                  {wishlistIds.includes(product.id) ? "♥" : "♡"}
                </button>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {product.desc}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-semibold text-pink-500">
                    {formatPrice(product.priceValue)}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => onAddToCart(product)}
                      className="px-3 py-2 text-sm rounded-full bg-pink-600 text-white"
                    >
                      Add to cart
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                      e.stopPropagation();
                      navigate("/payment", { state: { product } });
                    }}

                      className="px-2 py-2 text-sm rounded-full bg-pink-600 text-white"
                    >
                      Buy now
                    </button>


                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

