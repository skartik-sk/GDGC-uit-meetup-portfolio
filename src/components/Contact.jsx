import { useState } from "react";

const Contact = ({ contact, personal, social }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (This is a demo)");
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-primary text-white"
    >
      {/* Animated Molten Blobs */}
      <div
        className="absolute inset-0 z-0 h-full w-full opacity-30"
        style={{ filter: "url('#goo')" }}
      >
        <div className="absolute h-full w-full">
          <div className="absolute left-[30%] top-[20%] h-56 w-56 animate-molten-blob-1 rounded-full bg-cyan-400 mix-blend-screen"></div>
          <div className="absolute right-[30%] top-[40%] h-64 w-64 animate-molten-blob-2 rounded-full bg-blue-500 mix-blend-screen"></div>
        </div>
      </div>

      {/* SVG Filter for Goo Effect */}
      <svg className="absolute z-0 h-0 w-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="15"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              result="goo"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10"
            ></feColorMatrix>
            <feComposite
              in="SourceGraphic"
              in2="goo"
              operator="atop"
            ></feComposite>
          </filter>
        </defs>
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8">
          {/* Left Side - Info */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl">
              {contact.title}
            </h2>
            <p className="mt-4 max-w-md text-base text-white/70">
              {contact.subtitle}
            </p>

            {/* Contact Info */}
            <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:gap-8 lg:items-start">
              <a
                href={`mailto:${personal.email}`}
                className="text-lg font-medium text-white/70 underline transition-colors hover:text-white"
              >
                {personal.email}
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
              {social.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="group flex size-10 items-center justify-center rounded-full bg-white/10 transition-all hover:-translate-y-1 hover:bg-white/20"
                  aria-label={item.name}
                >
                  <span className="material-symbols-outlined text-xl text-white/80 transition-colors group-hover:text-white">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md sm:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-6 sm:flex-row">
                <label className="flex flex-1 flex-col">
                  <span className="pb-2 text-sm font-medium text-white/80">
                    Full Name
                  </span>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input h-12 rounded-lg border-white/20 bg-white/10 px-4 text-base text-white placeholder:text-white/40 focus:border-white/50 focus:ring-2 focus:ring-white/20"
                    placeholder="Enter your full name"
                    type="text"
                    required
                  />
                </label>
                <label className="flex flex-1 flex-col">
                  <span className="pb-2 text-sm font-medium text-white/80">
                    Email Address
                  </span>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input h-12 rounded-lg border-white/20 bg-white/10 px-4 text-base text-white placeholder:text-white/40 focus:border-white/50 focus:ring-2 focus:ring-white/20"
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                </label>
              </div>
              <label className="flex flex-col">
                <span className="pb-2 text-sm font-medium text-white/80">
                  Your Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea min-h-[120px] resize-y rounded-lg border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-white/50 focus:ring-2 focus:ring-white/20"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </label>
              <button
                type="submit"
                className="flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-white px-4 text-base font-semibold text-primary transition-transform active:scale-[0.98] hover:shadow-lg"
              >
                <span className="truncate">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes molten-blob-1 {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
            filter: blur(20px);
          }
          25% {
            transform: translate(150px, -50px) scale(1.1);
            filter: blur(22px);
          }
          50% {
            transform: translate(50px, 50px) scale(0.9);
            filter: blur(25px);
          }
          75% {
            transform: translate(-100px, 20px) scale(1.05);
            filter: blur(18px);
          }
        }
        @keyframes molten-blob-2 {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
            filter: blur(18px);
          }
          25% {
            transform: translate(-80px, 60px) scale(0.95);
            filter: blur(24px);
          }
          50% {
            transform: translate(100px, -20px) scale(1.1);
            filter: blur(20px);
          }
          75% {
            transform: translate(20px, -70px) scale(0.9);
            filter: blur(26px);
          }
        }
        .animate-molten-blob-1 {
          animation: molten-blob-1 20s infinite ease-in-out;
        }
        .animate-molten-blob-2 {
          animation: molten-blob-2 22s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;
