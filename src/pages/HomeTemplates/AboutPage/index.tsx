const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-100 text-blue-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-cyan-600">
          About ANTI RUG PULLING
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          <span className="font-semibold text-cyan-700">ANTI RUG PULLING</span> is a
          community-driven initiative to combat one of the most common and damaging scams in
          the cryptocurrency world — rug pulls. Our mission is to increase transparency,
          raise awareness, and provide tools that help investors make safer decisions in
          decentralized finance.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-cyan-700">🔍 Transparency First</h2>
            <p className="text-gray-700">
              We aim to shine light on suspicious projects and educate users about key signs of fraud in Web3.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-cyan-700">🛡️ Empowering Investors</h2>
            <p className="text-gray-700">
              By offering a platform with tracking tools, research data, and tutorials, we help users make safer investment decisions.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-cyan-700">🤝 Community Driven</h2>
            <p className="text-gray-700">
              Everything we build is in collaboration with the crypto community. We listen. We adapt. We evolve.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-cyan-700">🚀 Built for the Future</h2>
            <p className="text-gray-700">
              Though early in development, we are laying the foundation for a safer DeFi ecosystem, one step at a time.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-md text-gray-600">
            Want to be part of the journey? Follow us or contact our team to learn more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
