export const ContactForm = () => {
  return (
    <section className="w-full bg-primary-dark px-8 sm:px-14 md:px-20 lg:px-26.25 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Left — heading */}
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            Talk to Our Agriculture Experts
          </h2>
          <p className="text-white/70 text-sm leading-relaxed">
            Speak directly with our experts to discuss your agribusiness ideas,
            project plans, or investment opportunities and receive professional
            guidance on the most effective implementation strategies.
          </p>
        </div>

        {/* Right — form */}
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="fullName" className="text-white/80 text-xs">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Full Name"
                className="bg-transparent border border-white/30 rounded px-4 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-white/60"
              />
            </div>
            <div className="flex flex-col gap-1.5 sm:col-span-1">
              {/* empty for grid alignment */}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-white/80 text-xs">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="bg-transparent border border-white/30 rounded px-4 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-white/60"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-white/80 text-xs">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone Number"
                className="bg-transparent border border-white/30 rounded px-4 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-white/60"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="company" className="text-white/80 text-xs">
                Company
              </label>
              <input
                id="company"
                type="text"
                placeholder="Your Company"
                className="bg-transparent border border-white/30 rounded px-4 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-white/60"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="jobTitle" className="text-white/80 text-xs">
                Job Title
              </label>
              <input
                id="jobTitle"
                type="text"
                placeholder="Job Title"
                className="bg-transparent border border-white/30 rounded px-4 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-white/60"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="description" className="text-white/80 text-xs">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Tell us about your project..."
              rows={5}
              className="bg-transparent border border-white/30 rounded px-4 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-white/60 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-primary-dark font-semibold py-3 rounded hover:bg-white/90 transition-colors mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
