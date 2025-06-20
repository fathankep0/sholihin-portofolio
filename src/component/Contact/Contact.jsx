import { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/{your-form-id}", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Submission error", err);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-blue-500" />,
      label: "Phone",
      value: "+62 812-9109-6434",
    },
    {
      icon: <FaEnvelope className="text-red-500" />,
      label: "Email",
      value: "sholihin.013@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-green-500" />,
      label: "Address",
      value: "Villa Mutiara Bogor Blok E6 No 5, Bogor, Indonesia",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-500">
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle Dark Mode"
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      >
        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
      </button>

      <div className="max-w-5xl mx-auto text-center font-roboto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-12 font-fira"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                className="flex items-start gap-4 p-4 rounded-xl shadow-md bg-gray-100 dark:bg-gray-800 text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{item.label}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Embedded Map */}
            <div className="mt-6">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4939.509353608041!2d106.77312837591722!3d-6.52231706376533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c3005513c7f7%3A0x2e9d9b2b7507acf2!2sVilla%20Mutiara%20Bogor%201!5e1!3m2!1sen!2sus!4v1750332239379!5m2!1sen!2sus"
                className="w-full h-64 border-none rounded-lg shadow"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition"
            >
              Send Message
            </button>
            {submitted && (
              <p className="text-green-500 mt-2">Thanks! Your message has been sent.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
