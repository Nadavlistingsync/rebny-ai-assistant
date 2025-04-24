

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800">REBNY Lease AI</div>
      <div className="space-x-4">
        <Link href="/leases/condo">
          <a className="text-gray-600 hover:text-blue-600">Condo Lease</a>
        </Link>
        <Link href="/leases/coop">
          <a className="text-gray-600 hover:text-blue-600">Coop Lease</a>
        </Link>
        <Link href="/leases/townhome">
          <a className="text-gray-600 hover:text-blue-600">Townhome Lease</a>
        </Link>
        <Link href="/leases/non-stabilized">
          <a className="text-gray-600 hover:text-blue-600">Non-Stabilized Lease</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;