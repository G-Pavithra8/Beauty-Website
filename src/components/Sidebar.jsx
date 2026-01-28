import { Link, useNavigate } from "react-router-dom";

export default function Sidebar({ close, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) onLogout();
    close();
    navigate("/");
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* BACKDROP */}
      <div
        onClick={close}
        className="absolute inset-0 bg-black/50"
      ></div>

      {/* PANEL */}
      <div className="absolute right-0 top-0 h-full w-72 bg-white border-l border-pink-100 shadow-lg p-6">
        <button
          onClick={close}
          className="text-right w-full text-xl mb-6 text-gray-700 hover:text-pink-500"
        >
          ✕
        </button>

        <ul className="space-y-6 text-lg">
          <li>
            <Link to="/profile" className="text-gray-700 hover:text-pink-500">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/wishlist" className="text-gray-700 hover:text-pink-500">
              Wishlist
            </Link>
          </li>
          <li>
            <Link to="/orders" className="text-gray-700 hover:text-pink-500">
              Orders
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-pink-500">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/help" className="text-gray-700 hover:text-pink-500">
              Help / FAQ
            </Link>
          </li>
          <li
            className="text-red-500 cursor-pointer hover:text-red-600"
            onClick={handleLogout}
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
}
