import { useNavigate } from "react-router-dom";

const products = [
  {
    id: "body-silk-lotion",
    name: "Silk Body Lotion",
    desc: "Soft hydration",
    priceValue: 699,
    tag: "Smooth",
    img: "https://rukminim2.flixcart.com/image/480/480/xif0q/moisturizer-cream/7/o/o/200-body-silk-almond-lotion-natura-lotion-original-imahhd7ch3akerb7.jpeg?q=90",
  },
  {
    id: "body-velvet-shower-gel",
    name: "Velvet Shower Gel",
    desc: "Gentle cleanse",
    priceValue: 599,
    tag: "Fresh",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrYl00YJ_7m1MIz7ckO9P1e5NAWTk8rKBFw&s",
  },
  {
    id: "body-polish-scrub",
    name: "Body Polish Scrub",
    desc: "Glow boost",
    priceValue: 899,
    tag: "Best Seller",
    img: "https://www.mcaffeine.com/cdn/shop/products/1_11.jpg?v=1640457882",
  },
  {
    id: "body-hand-cream",
    name: "Hand Cream",
    desc: "Deep care",
    priceValue: 449,
    tag: "New",
    img: "https://images-static.nykaa.com/media/catalog/product/0/d/0d753cfPLUMX00001070n_8.jpg?tr=w-500",
  },
  {
    id: "body-body-butter",
    name: "Body Butter",
    desc: "Rich moisture",
    priceValue: 999,
    tag: "Luxury",
    img: "https://www.shoppigment.com/cdn/shop/files/body-butter-coconut-vanilla.jpg?v=1762466204",
  },
  {
    id: "body-glow-oil",
    name: "Glow Body Oil",
    desc: "Radiant sheen",
    priceValue: 1099,
    tag: "Shine",
    img: "https://images-static.nykaa.com/media/catalog/product/4/8/48063b4SOLDE00000013_r3.jpg?tr=w-500",
  },
  {
    id: "body-foot-cream",
    name: "Foot Cream",
    desc: "Overnight care",
    priceValue: 499,
    tag: "Care",
    img: "https://www.vilvahstore.com/cdn/shop/files/Vilvah_foot_cream.jpg?v=1750660372",
  },
  {
    id: "body-mist",
    name: "Body Mist",
    desc: "Light fragrance",
    priceValue: 799,
    tag: "Mist",
    img: "https://m.media-amazon.com/images/I/71CKlaDRMgL._AC_UF350,350_QL80_.jpg",
  },
];

export default function BodyCare({
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
}) {

  // ✅ CREATE navigate
  const navigate = useNavigate();

  // ✅ DEFINE isSignedIn
  const isSignedIn = localStorage.getItem("isSignedIn") === "true";

  const formatPrice = (value) =>
    `₹${value.toLocaleString("en-IN")}`;

  return (
    <section className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-pink-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-10">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Body Care
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Nourish and pamper with indulgent body care picks.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="w-28 h-1 rounded-full bg-pink-500"></span>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-[28px] overflow-hidden bg-white border-2 border-pink-300 hover:border-pink-500 shadow-lg hover:-translate-y-2 transition-all"
            >

              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.desc}</p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xl font-semibold text-pink-600">
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
