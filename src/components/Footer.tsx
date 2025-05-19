const Footer = () => {
  const footerLinks = [
    {
      title: "Products",
      links: ["Exchange", "App", "Pay", "DeFi Wallet", "Earn"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Press", "Security", "News"],
    },
    {
      title: "Resources",
      links: ["Help Center", "Academy", "Market Updates", "Events"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Disclosures"],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "🌐" },
    { name: "Twitter", icon: "🐦" },
    { name: "YouTube", icon: "📺" },
    { name: "Instagram", icon: "📷" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div>
          <img
            src="https://crypto.com/static/logo.svg"
            alt="Crypto Logo"
            className="h-8 mb-4"
          />
          <p className="text-sm">The World’s Leading Cryptocurrency Platform</p>
        </div>

        {/* Footer Links */}
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h4 className="font-semibold mb-2 text-white">{section.title}</h4>
            <ul className="space-y-1">
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white transition text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
        {/* Socials */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href="#"
              className="text-xl hover:text-white"
              aria-label={s.name}
              title={s.name}
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
