import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const plans = [
  {
    title: "Free",
    price: "$0",
    subtext: "USD/month",
    features: [
      "✅ Check Liquidity Pool address 1 time/day",
      "❌ No historical activity data",
      "❌ No liquidity ratio analysis",
      "❌ No swap detail access",
    ],
    highlight: false,
    borderColor: "border-gray-600",
    textColor: "text-gray-300",
    button: null,
  },
  {
    title: "Pro",
    price: "$3.00",
    subtext: "USD/month",
    features: [
      "✅ Unlimited Liquidity Pool checks",
      "📊 Total Liquidity Added/Removed",
      "📉 Add/Remove Ratio",
      "🔄 Pool Status (Active/Inactive)",
      "🕒 Lifetime Duration (First/Last Activity)",
      "💱 Last Swap Details",
    ],
    highlight: true,
    borderColor: "border-yellow-400",
    textColor: "text-gray-100",
    button: (
      <Link
        to="/checkout"
        className="inline-block bg-cyan-400 hover:bg-cyan-500 text-[#0f172a] font-bold px-6 py-2 rounded-xl transition"
      >
        Upgrade to Pro
      </Link>
    ),
  },
];

const PremiumPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cyan-400 mb-2">
            Choose Your Plan
          </h1>
          <p className="text-gray-300">
            Gain deeper insights and tracking on Liquidity Pools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 border shadow-xl bg-[#0f172a] space-y-4 ${
                plan.highlight ? "scale-105 border-cyan-400" : plan.borderColor
              } transition duration-300`}
            >
              <h2
                className={`text-2xl font-semibold ${
                  plan.highlight ? "text-cyan-300" : "text-cyan-300"
                }`}
              >
                {plan.title}
              </h2>
              <div className="text-3xl font-bold">
                {plan.price} <span className="text-base font-normal">{plan.subtext}</span>
              </div>
              <ul className={`space-y-2 text-sm ${plan.textColor}`}>
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-cyan-400 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-center">{plan.button}</div>
            </div>
          ))}
        </div>

        <div className="text-center text-xs text-gray-500 mt-10">
          Cancel anytime. Secure payments powered by Stripe.
        </div>
      </div>
    </div>
  );
};

export default PremiumPage;
