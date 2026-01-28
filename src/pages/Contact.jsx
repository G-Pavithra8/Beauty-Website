import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_ru6lkhi";
const TEMPLATE_ID = "template_p2525zo";
const PUBLIC_KEY = "jECA-FiDZwEnJvxNB";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) {
      nextErrors.name = "Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(form.name.trim())) {
      nextErrors.name = "Only alphabets are allowed.";
    }
    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email.";
    }
    if (!form.message.trim()) {
      nextErrors.message = "Message is required.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (field, value) => {
    if (field === "name") {
      const onlyLetters = value.replace(/[^A-Za-z\s]/g, "");
      setForm((prev) => ({ ...prev, name: onlyLetters }));
      return;
    }
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 2500);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
    }
  };

  return (
    <section className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-5xl mx-auto px-10">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Contact
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We're here to help with your beauty journey.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="w-24 h-1 rounded-full bg-pink-500"></span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white border border-pink-100 rounded-2xl p-8 shadow-md">
            <h3 className="text-xl font-semibold text-pink-500">
              Reach Us
            </h3>
            <p className="mt-4 text-gray-600">
              Email: support@nykaa-clone.com
            </p>
            <p className="mt-2 text-gray-600">Phone: +91 98765 43210</p>
            <p className="mt-2 text-gray-600">
              Hours: 9:00 AM - 9:00 PM
            </p>
          </div>

          <div className="bg-white border border-pink-100 rounded-2xl p-8 shadow-md">
            <h3 className="text-xl font-semibold text-pink-500">
              Send a Message
            </h3>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full rounded-2xl bg-gray-50 border border-pink-100 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-pink-500"
              />
              {errors.name && (
                <p className="text-xs text-pink-500">{errors.name}</p>
              )}
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full rounded-2xl bg-gray-50 border border-pink-100 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-pink-500"
              />
              {errors.email && (
                <p className="text-xs text-pink-500">{errors.email}</p>
              )}
              <textarea
                rows="4"
                placeholder="How can we help?"
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="w-full rounded-2xl bg-gray-50 border border-pink-100 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-pink-500"
              ></textarea>
              {errors.message && (
                <p className="text-xs text-pink-500">{errors.message}</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-pink-500 text-white py-3 rounded-full font-semibold hover:bg-pink-600 transition disabled:opacity-70"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
            {status === "sent" && (
              <div className="mt-4 rounded-2xl bg-pink-50 border border-pink-200 px-4 py-3 text-sm text-pink-600">
                ✅ Successfully sent!
              </div>
            )}
            {status === "error" && (
              <div className="mt-4 rounded-2xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                ❌ Something went wrong. Try again.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
