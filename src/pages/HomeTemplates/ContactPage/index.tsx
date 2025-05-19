

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-white to-cyan-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-blue-900 text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center">
          We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-blue-900 font-semibold">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-blue-900 font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-blue-900 font-semibold">Message</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-400 hover:bg-cyan-500 text-blue-900 font-semibold py-2 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
