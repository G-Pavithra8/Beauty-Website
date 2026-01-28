import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SignIn({ onSignedIn }) {
  const [mode, setMode] = useState("signup");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || "/payment";

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("");
    const nextErrors = {};
    const nameValue = form.name.trim();
    const emailValue = form.email.trim();
    const passwordValue = form.password.trim();

    if (mode === "signup") {
      if (!nameValue) {
        nextErrors.name = "Name is required.";
      } else if (!/^[A-Za-z\s]+$/.test(nameValue)) {
        nextErrors.name = "Only alphabets are allowed.";
      }
    }

    if (!emailValue) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      nextErrors.email = "Enter a valid email.";
    }

    if (!passwordValue) {
      nextErrors.password = "Password is required.";
    } else if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(passwordValue)) {
      nextErrors.password =
        "Min 6 chars with at least 1 letter and 1 number.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const storedUser = JSON.parse(
      localStorage.getItem("nykaa_user") || "null"
    );

if (mode === "signup") {
  localStorage.setItem(
    "nykaa_user",
    JSON.stringify({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    })
  );

  // ✅ ADD THIS LINE
  localStorage.setItem("userEmail", emailValue);

  onSignedIn();
  navigate(redirectTo);
  return;
}


    if (!storedUser) {
      setStatus("Please sign up before login.");
      return;
    }

if (
  storedUser.email === emailValue &&
  storedUser.password === passwordValue
) {
  // ✅ ADD THIS
  localStorage.setItem("userEmail", emailValue);

  onSignedIn();
  navigate(redirectTo);
}
 else {
      setStatus("Invalid email or password.");
    }
  };

  const handleNameChange = (value) => {
    const onlyLetters = value.replace(/[^A-Za-z\s]/g, "");
    setForm((prev) => ({ ...prev, name: onlyLetters }));
  };

  const CARD_CLASS =
    "group rounded-[28px] overflow-hidden bg-white border-2 border-pink-300 hover:border-pink-500 shadow-lg hover:shadow-[0_15px_40px_-10px_rgba(236,72,153,0.45)] hover:-translate-y-2 transition-all duration-300 ease-out";

  return (
    <section className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-md mx-auto px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">
            {mode === "signup" ? "Create Account" : "Login"}
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            {mode === "signup"
              ? "Sign up to continue to payment."
              : "Login to continue to payment."}
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <button
              onClick={() => setMode("signup")}
              className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                mode === "signup"
                  ? "bg-pink-500/80 border-pink-300 text-white"
                  : "border-pink-300 text-gray-600"
              }`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setMode("login")}
              className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                mode === "login"
                  ? "bg-pink-500/80 border-pink-300 text-white"
                  : "border-pink-300 text-gray-600"
              }`}
            >
              Login
            </button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`${CARD_CLASS} mt-10 p-8 space-y-4`}
        >
          {mode === "signup" && (
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => handleNameChange(e.target.value)}
              className="w-full rounded-2xl bg-gray-50 border border-pink-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-pink-500"
            />
          )}
          {errors.name && (
            <p className="text-xs text-pink-500">{errors.name}</p>
          )}
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
            className="w-full rounded-2xl bg-gray-50 border border-pink-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-pink-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, password: e.target.value }))
            }
            className="w-full rounded-2xl bg-gray-50 border border-pink-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-pink-500"
          />
          {errors.email && (
            <p className="text-xs text-pink-500">{errors.email}</p>
          )}
          {errors.password && (
            <p className="text-xs text-pink-500">{errors.password}</p>
          )}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-full font-semibold hover:bg-pink-600 transition"
          >
            {mode === "signup" ? "Create Account" : "Login"}
          </button>
          {status && (
            <p className="text-xs text-center text-pink-500">{status}</p>
          )}
          <p className="text-xs text-center text-gray-600">
            {mode === "signup"
              ? "Already have an account? Switch to Login."
              : "New user? Switch to Sign Up."}
          </p>
        </form>
      </div>
    </section>
  );
}

