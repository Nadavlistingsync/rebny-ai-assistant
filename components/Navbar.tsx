import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">REBNY Lease AI</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/leases/condo">
              <a className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Condo Lease</a>
            </Link>
            <Link href="/leases/coop">
              <a className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Coop Lease</a>
            </Link>
            <Link href="/leases/townhome">
              <a className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Townhome Lease</a>
            </Link>
            <Link href="/leases/non-stabilized">
              <a className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Non-Stabilized Lease</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;