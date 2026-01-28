import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const navItems = [
  { label: "Makeup", path: "/makeup" },
  { label: "Skin", path: "/skin-care" },
  { label: "Hair", path: "/hair-care" },
  { label: "Fragrance", path: "/fragrance" },
  { label: "Minis", path: "/minis" },
  { label: "Body", path: "/body-care" },
];

export default function Navbar({ cartCount, onLogout }) {
  const [open, setOpen] = useState(false);

  return (
    <>
     <nav
  className="fixed top-0 w-full z-50 flex items-center justify-between 
  px-10 py-6 bg-pink-400/90 backdrop-blur-md 
  border-b border-pink-200 shadow-sm"
>

  {/* LEFT - LOGO */}
  <Link
    to="/"
    className="text-2xl font-extrabold tracking-wide text-pink-600"
  >
    Evolve Beauty
  </Link>

  {/* CENTER - CATEGORIES */}
  <div className="hidden md:flex space-x-12 text-slate-700 font-medium">
    {navItems.map((item) => (
      <Link
        key={item.label}
        to={item.path}
        className="relative transition hover:text-pink-600
        after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px]
        after:bg-pink-500 hover:after:w-full after:transition-all"
      >
        {item.label}
      </Link>
    ))}
  </div>

  {/* RIGHT */}
  <div className="flex items-center space-x-6">
    {/* CART */}
    <Link
      to="/cart"
      className="relative text-slate-700 hover:text-pink-600 transition font-medium"
    >
      Cart
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-4 flex h-5 w-5 items-center 
        justify-center rounded-full bg-pink-500 text-[10px] 
        font-bold text-white shadow-md">
          {cartCount}
        </span>
      )}
    </Link>

    {/* SIGN UP */}
    <a
      href="/signup"
      className="bg-pink-500 text-white px-6 py-2 rounded-full 
      font-semibold shadow-md hover:bg-pink-600 
      hover:scale-105 transition-all"
    >
      Sign Up
    </a>

    {/* HAMBURGER */}
    <button
      onClick={() => setOpen(true)}
      className="text-slate-700 hover:text-pink-600 
      text-2xl transition"
    >
      ☰
    </button>
  </div>
</nav>

      {open && <Sidebar close={() => setOpen(false)} onLogout={onLogout} />}
    </>
  );
}
