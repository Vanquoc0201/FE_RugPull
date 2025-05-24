import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function GetLPAPage() {
  return (
    <div className="w-full mt-5 bg-[#0f172a] text-gray-300 py-12 px-6 border-t border-b border-cyan-600">
  <div className="w-full max-w-7xl mx-auto">
    <h1 className="text-4xl font-bold text-cyan-400 mb-6 text-center sm:text-left">
      How to Find a Liquidity Pool Address
    </h1>

    <p className="mb-6 text-lg text-gray-400">
      To find the Liquidity Pool (LP) address for a token, follow these steps:
    </p>

    <ol className="list-decimal list-inside space-y-4 text-base">
      <li>
        Visit{" "}
        <a
          href="https://www.dextools.io/app/en/pairs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
        >
          DEXTools.io Pairs <FaExternalLinkAlt size={12} />
        </a>
      </li>
      <li>
        Search for the trading pair you're interested in, e.g.,{" "}
        <strong className="text-white">TRUMP/WETH</strong>
      </li>
      <li>
        Under the Uniswap V2 interface, two addresses will be shown:
        <ul className="list-disc ml-6 mt-2 space-y-3">
          <li>
            <span className="font-semibold text-white">Token Contract</span>: This is the contract address of the token.
            <div className="bg-[#1e293b] text-cyan-300 text-sm font-mono p-3 mt-1 rounded-md overflow-x-auto w-full">
              0x10e14b046950e65a53b9a2093951c26a4a7c67e
            </div>
          </li>
          <li>
            <span className="font-semibold text-white">Pair Contract</span>: This is the liquidity pool address.
            <div className="bg-[#1e293b] text-cyan-300 text-sm font-mono p-3 mt-1 rounded-md overflow-x-auto w-full">
              0xbf2e33e1e5573a31f495bba07ab51e2a982b134f
            </div>
          </li>
        </ul>
      </li>
    </ol>

    <div className="mt-10">
      <Link
        to="/"
        className="text-cyan-400 hover:text-cyan-300 underline transition duration-200"
      >
        ← Back to Home
      </Link>
    </div>
  </div>
</div>

  );
}
