export default function Footer() {
  return (
    <footer className="bg-pink-500 border-t border-pink-100 px-10 py-14">
      {/* TOP GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* BRAND */}
        <div>
          <h3 className="text-xl font-extrabold text-pink-600 mb-3">
            Evolve Beauty
          </h3>
          <p className="text-gray-600 leading-relaxed">
            India’s No.1 Beauty Destination for skincare, makeup & self-love.
          </p>
        </div>

        {/* CUSTOMER CARE */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-800 uppercase tracking-wide text-sm">
            Customer Care
          </h3>
          <ul className="space-y-2">
            <li className="footer-link">Shipping & Delivery</li>
            <li className="footer-link">Returns & Refunds</li>
            <li className="footer-link">Track Your Order</li>
          </ul>
        </div>

        {/* INSPIRE */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-800 uppercase tracking-wide text-sm">
            Inspire Me
          </h3>
          <ul className="space-y-2">
            <li className="footer-link">Beauty Book</li>
            <li className="footer-link">Beauty TV</li>
            <li className="footer-link">Trends & Tips</li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-800 uppercase tracking-wide text-sm">
            Legal
          </h3>
          <ul className="space-y-2">
            <li className="footer-link">Privacy Policy</li>
            <li className="footer-link">Terms & Conditions</li>
            <li className="footer-link">Cookie Policy</li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="my-8 border-t border-pink-100"></div>

      {/* BOTTOM */}
      <p className="text-center text-sm text-gray-500">
        © 2026 <span className="font-medium text-gray-700">Evolve Beauty</span>. All Rights Reserved.
      </p>
    </footer>
  );
}
