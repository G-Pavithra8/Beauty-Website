export default function Offers() {
  return (
    <section className="py-24 px-10 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-5xl font-extrabold tracking-wide text-gray-800">
          Unmissable Beauty Deals
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Luxury beauty at prices you'll love. Limited time only!
        </p>

        {/* Offers */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition duration-300 border border-pink-100">
            <img
              src="https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229768.jpg?semt=ais_hybrid&w=740&q=80"
              alt="offer"
              className="w-full h-[300px] object-cover transform group-hover:scale-105 transition duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            {/* Offer Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-4xl font-extrabold text-white drop-shadow-lg">
                FLAT 40% OFF
              </span>
              <p className="mt-2 text-lg text-white font-semibold">
                On Makeup Essentials
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition duration-300 border border-pink-100">
            <img
              src="https://img.freepik.com/premium-photo/beautiful-model-girl-with-french-manicure-nails-woman-fashion-makeup-care-hands-cosmetics-facial-treatment-cosmetologybeauty-spa-skin-care_35691-14390.jpg"
              alt="offer"
              className="w-full h-[300px] object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-4xl font-extrabold text-white drop-shadow-lg">
                BUY 1 GET 1
              </span>
              <p className="mt-2 text-lg text-white font-semibold">
                Skincare Specials
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition duration-300 border border-pink-100">
            <img
              src="https://cdn.mos.cms.futurecdn.net/xAa4YUyy7pVUfrJrgQEtxD.jpg"
              alt="offer"
              className="w-full h-[300px] object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-4xl font-extrabold text-white drop-shadow-lg">
                MEGA SALE
              </span>
              <p className="mt-2 text-lg text-white font-semibold">
                Minis & Combos
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
