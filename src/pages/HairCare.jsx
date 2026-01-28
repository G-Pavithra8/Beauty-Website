import { useNavigate } from "react-router-dom";
const products = [
  {
    id: "hair-silk-repair-shampoo",
    name: "Silk Repair Shampoo",
    desc: "Gentle cleanse",
    priceValue: 699,
    tag: "Smooth",
    img: "https://image.made-in-china.com/2f0j00tekVFDRBaaUv/Naturally-Silk-Protein-Formula-Curly-Shampoo-Gently-Oil-Control-Repair-Shampoo-and-Conditioner-Set.webp" },
  {
    id: "hair-hydra-shine-conditioner",
    name: "Hydra Shine Conditioner",
    desc: "Soft & glossy",
    priceValue: 749,
    tag: "Hydrate",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHr4oIwXynuSDLEIYaxHpYHHH-Jpd8ETq-yg&s",
  },
  {
    id: "hair-argan-serum",
    name: "Argan Hair Serum",
    desc: "Frizz control",
    priceValue: 899,
    tag: "Best Seller",
    img: "data:image/jpeg;base64,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",
  },
  {
    id: "hair-scalp-detox-scrub",
    name: "Scalp Detox Scrub",
    desc: "Deep cleanse",
    priceValue: 999,
    tag: "Fresh",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBb0P0ViMnjnnJjn7_UHMxlqezJSmYYGjNkA&s",
  },
  {
    id: "hair-heat-protect-spray",
    name: "Heat Protect Spray",
    desc: "Style safe",
    priceValue: 599,
    tag: "Shield",
    img: "https://leestafford.com/cdn/shop/files/LeeStafford-Styling_HeatProtectingShineMist_Lifestyle-Shopify-2.jpg?v=1695122886"},
      {
    id: "hair-nourish-mask",
    name: "Nourish Hair Mask",
    desc: "Weekly repair",
    priceValue: 1099,
    tag: "Repair",
    img: "https://suspire.in/cdn/shop/files/NourishHairMaskfill-2-_1_1024x1024.jpg?v=1716539956" },
  {
    id: "hair-curl-define-cream",
    name: "Curl Define Cream",
    desc: "Soft waves",
    priceValue: 649,
    tag: "Curl",
    img: "https://www.letscurlup.com/cdn/shop/files/CurlDefiningCream_ingredients.webp?v=1724164790&width=1080" },
  {
    id: "hair-growth-tonic",
    name: "Hair Growth Tonic",
    desc: "Daily care",
    priceValue: 1299,
    tag: "New",
    img:"data:image/jpeg;base64,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" },
];

export default function HairCare({
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
}) {
  // ✅ CREATE navigate
  const navigate = useNavigate();
  const isSignedIn = localStorage.getItem("isSignedIn") === "true";

  const formatPrice = (value) =>
    `₹${value.toLocaleString("en-IN")}`;

  return (
    <section className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Hair Care
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Smooth, nourish, and style with premium hair rituals.
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
                        e.stopPropagation();     // ✅ stops bubbling
                        navigate(
                          isSignedIn ? "/payment" : "/signin",
                          { state: { product } }
                        );
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

