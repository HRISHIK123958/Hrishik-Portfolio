import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ success: null, message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2a18mwf",
        "template_rz7ojsd",
        form.current,
        "BW1-Qyi2J0Ua4FZgU"
      )
      .then(
        () => {
          setStatus({ success: true, message: "Message sent successfully!" });
          e.target.reset();
        },
        (error) => {
          console.error("Send failed:", error.text);
          setStatus({ success: false, message: "Failed to send. Please try again." });
        }
      );
  };

  useEffect(() => {
    let timer;
    if (status.success !== null) {
      timer = setTimeout(() => setStatus({ success: null, message: "" }), 4000);
    }
    return () => clearTimeout(timer);
  }, [status.success]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* Contact Info */}
        <div data-aos="fade-right" className="space-y-8">
          <h2 className="text-4xl font-extrabold text-[#80ffdb] drop-shadow-md">
            Let’s Connect
          </h2>
          <p className="text-white/80">
            Drop me a line — whether it's a question, opportunity, or just a hello.
          </p>
          <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl shadow-md backdrop-blur border border-white/20">
            <FaEnvelope className="text-[#80ffdb] text-2xl" />
            <a
              href="mailto:hrishikdey75@gmail.com"
              className="text-white hover:text-[#80ffdb] transition"
            >
              hrishikdey75@gmail.com
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl space-y-6 transition-all duration-300 hover:scale-[1.01]"
          data-aos="fade-left"
        >
          <div>
            <label className="block mb-1 text-white/80">Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Your name"
              required
              className="w-full bg-[#1e293b]/80 text-white border border-white/30 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#80ffdb] outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-white/80">Email</label>
            <input
              type="email"
              name="reply_to"
              placeholder="you@example.com"
              required
              className="w-full bg-[#1e293b]/80 text-white border border-white/30 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#80ffdb] outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-white/80">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
              className="w-full bg-[#1e293b]/80 text-white border border-white/30 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#80ffdb] outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#80ffdb] text-[#1e1e1e] hover:bg-[#5ee8c7] py-3 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Send Message
          </button>

          {status.success !== null && (
            <p
              className={`mt-4 text-center text-lg font-semibold ${
                status.success ? "text-green-400" : "text-red-400"
              }`}
            >
              {status.success ? "✅ " : "❌ "}
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
