import { Link } from "react-router-dom";

const categories = [
  {
    name: "MAKEUP",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    path: "/makeup",
  },
  {
    name: "SKIN",
    img: "https://t4.ftcdn.net/jpg/06/24/50/09/360_F_624500902_Ec2IXIZvdcjlT7J1RkXgL4hvGufg9s7W.jpg",
    path: "/skin-care",
  },
  {
    name: "FRAGRANCE",
    img: "https://images.unsplash.com/photo-1541643600914-78b084683601",
    path: "/fragrance",
  },
  {
    name: "HAIR",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
    path: "/hair-care",
  },
  {
    name: "MINIS",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
    path: "/minis",
  },
  {
    name: "BODY",
    img: "https://khadibeauty.com/cdn/shop/collections/korperpflege-Model-khadi.jpg?v=1743515789&width=1600",
    path: "/body-care",
  },
];

export default function CategorySection() {
  return (
    <section className="py-20 px-10 bg-white">

      {/* ===== HEADING ===== */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Shop By Category
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Explore <span className="font-semibold text-pink-500">premium beauty picks</span>{" "}
          curated just for you
        </p>

        <div className="mt-6 flex justify-center">
          <span className="w-24 h-1 rounded-full bg-pink-500"></span>
        </div>
      </div>

      {/* ===== CATEGORY CARDS ===== */}
      <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={cat.path}
            className="relative min-w-[220px] h-[260px] rounded-2xl overflow-hidden cursor-pointer
                       shadow-md hover:shadow-lg transition-all duration-300 group border border-pink-100"
          >
            {/* IMAGE */}
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* TEXT */}
            <div className="absolute bottom-6 w-full text-center">
              <h2 className="text-xl font-bold text-white tracking-widest">
                {cat.name}
              </h2>
              <p className="text-sm text-white mt-1">
                Explore Now →
              </p>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
