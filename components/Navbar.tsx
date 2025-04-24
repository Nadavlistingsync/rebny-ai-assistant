import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <span className="text-xl font-bold text-gray-900">REBNY</span>
                <span className="ml-2 text-xl font-bold text-blue-600">Leases</span>
              </a>
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;