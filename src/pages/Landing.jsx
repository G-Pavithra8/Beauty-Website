import CategorySection from "../components/CategorySection";
import Offers from "../components/Offers";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="pt-20 bg-white">

      {/* HERO */}
      <div
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512496015851-a90fb38ba796')",
        }}
      >
        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 /60"></div>

        <div className="relative text-center px-6">
          <h1 className="text-8xl font-extrabold text-pink-800">
            Discover Your Beauty
          </h1>
          <p className="mt-6 text-4xl text-pink-900 max-w-9xl mx-auto">
            Premium makeup, skincare & beauty essentials curated for you
          </p>
        </div>
      </div>

      {/* ABOUT SECTION */}
<section className="py-20 bg-gradient-to-b from-pink-50 via-white to-pink-50">
  <div
    className="max-w-10xl mx-auto px-10 
    grid grid-cols-1 md:grid-cols-[1fr_1.3fr] 
    gap-16 items-center"
  >
    {/* LEFT - TEXT */}
    <div>
      <h2 className="text-5xl font-extrabold text-gray-800">
        About Evolve Beauty
      </h2>

      <div className="mt-4 w-20 h-1 bg-pink-500 rounded-full"></div>

      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
        At{" "}
        <span className="font-semibold text-pink-600">
          Evolve Beauty
        </span>
        , we believe beauty is about confidence, care, and
        self-expression. Our curated collection of makeup,
        skincare, hair, and body essentials is designed to
        help you feel your best every day.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        From everyday must-haves to indulgent self-care
        picks, we bring you high-quality beauty products
        that celebrate every unique glow.
      </p>
    </div>

    {/* RIGHT - IMAGE WITH GLOW */}
    <div className="relative md:translate-x-8">
      {/* Glow */}
      <div
        className="absolute -inset-4 rounded-[32px] 
        bg-pink-300/30 blur-2xl"
      ></div>

      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
        alt="About Evolve Beauty"
        className="relative rounded-[28px] 
        border-2 border-pink-300
        shadow-[0_0_40px_rgba(236,72,153,0.35)]
        hover:shadow-[0_0_60px_rgba(236,72,153,0.6)]
        transition-all duration-300"
      />
    </div>
  </div>
</section>


      <CategorySection />
      <Offers />
      <Footer />
    </div>
  );
}
