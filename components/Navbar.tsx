import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <span className="text-xl font-bold text-gray-900">REBNY</span>
                <span className="ml-2 text-xl font-bold text-blue-600">Leases</span>
              </a>
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/leases/condo">
              <a className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Condo</a>
            </Link>
            <Link href="/leases/coop">
              <a className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Co-op</a>
            </Link>
            <Link href="/leases/rental">
              <a className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Rental</a>
            </Link>
            <Link href="/leases/townhome">
              <a className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Townhome</a>
            </Link>
            <Link href="/dashboard">
              <a className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                Dashboard
              </a>
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;