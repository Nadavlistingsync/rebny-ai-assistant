import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Choose Your Lease Type</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
          <Link href="/leases/condo">
            <a className="bg-white border border-gray-300 hover:border-blue-500 shadow-sm rounded-lg px-6 py-4 text-center text-lg font-medium text-gray-700 hover:text-blue-600 transition">
              Combined Condo Lease
            </a>
          </Link>
          <Link href="/leases/coop">
            <a className="bg-white border border-gray-300 hover:border-blue-500 shadow-sm rounded-lg px-6 py-4 text-center text-lg font-medium text-gray-700 hover:text-blue-600 transition">
              Combined Coop Lease
            </a>
          </Link>
          <Link href="/leases/townhome">
            <a className="bg-white border border-gray-300 hover:border-blue-500 shadow-sm rounded-lg px-6 py-4 text-center text-lg font-medium text-gray-700 hover:text-blue-600 transition">
              Combined Townhome Lease
            </a>
          </Link>
          <Link href="/leases/rental">
            <a className="bg-white border border-gray-300 hover:border-blue-500 shadow-sm rounded-lg px-6 py-4 text-center text-lg font-medium text-gray-700 hover:text-blue-600 transition">
              Standard Non-Stabilized Lease
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
} 