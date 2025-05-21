import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: [
        { label: "Exchange", path: "#" },
        { label: "App", path: "#" },
        { label: "Pay", path: "#" },
        { label: "DeFi Wallet", path: "#" },
        { label: "Earn", path: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", path: "/about" },
        { label: "Careers", path: "#" },
        { label: "Press", path: "#" },
        { label: "Security", path: "#" },
        { label: "News", path: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Help Center", path: "#" },
        { label: "Academy", path: "#" },
        { label: "Market Updates", path: "#" },
        { label: "Events", path: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", path: "#" },
        { label: "Terms of Service", path: "#" },
        { label: "Disclosures", path: "#" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "🌐", path: "https://facebook.com" },
    { name: "Twitter", icon: "🐦", path: "https://twitter.com" },
    { name: "YouTube", icon: "📺", path: "https://youtube.com" },
    { name: "Instagram", icon: "📷", path: "https://instagram.com" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div>
          <Link to="/">
            <img
              src="/screenshots/logo.jpg"
              alt="RUGPULL Logo"
              className="h-10 object-contain mb-2"
            />
          </Link>
          <p className="text-sm text-gray-300">
            The World's Leading Cryptocurrency Platform
          </p>
        </div>

        {/* Footer Sections */}
        {footerSections.map((section) => (
          <div key={section.title}>
            <h4 className="font-semibold mb-2 text-white">{section.title}</h4>
            <ul className="space-y-1">
              {section.links.map(({ label, path }) => (
                <li key={label}>
                  <a
                    href={path}
                    className="text-sm transition hover:text-white text-blue-600"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
        {/* Social Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.path}
              className="text-xl hover:text-white"
              aria-label={s.name}
              title={s.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Crypto.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
