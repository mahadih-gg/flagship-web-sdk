import Link from 'next/link';
import { AiOutlineApi, AiOutlineHome } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-lg border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors">
              Flagship SDK
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-50"
              >
                <AiOutlineHome className="text-lg" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dynamic-entry-point"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-50"
              >
                <AiOutlineApi className="text-lg" />
                <span>Dynamic Entry Point</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;