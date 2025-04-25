'use client';
import { useRouter } from 'next/navigation';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between p-6 bg-white shadow-sm">
        <h1 className="text-xl font-bold text-blue-600">REBNY Lease Generator</h1>
        <button 
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => router.push('/leases/condo')}
        >
          Start My Lease
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Instantly Generate<br />Your REBNY Lease
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Fill out your information, pay securely, and receive a completed lease via DocuSign — all in minutes.
        </p>
        <button 
          className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 text-lg rounded-lg hover:bg-blue-700 transition"
          onClick={() => router.push('/leases/condo')}
        >
          Start Now <ArrowRightIcon className="w-5 h-5" />
        </button>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <CheckCircleIcon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Simple Form</h3>
            <p className="text-gray-600">Fill out one simple form with tenant and lease info.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CheckCircleIcon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
            <p className="text-gray-600">Pay easily with Stripe — your data is safe and encrypted.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CheckCircleIcon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Delivery</h3>
            <p className="text-gray-600">Get your fully signed lease via DocuSign automatically.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 py-20">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Generate Your Lease?
          </h2>
          <p className="text-gray-600 mb-8">
            It takes less than 5 minutes. Start now and save hours of paperwork.
          </p>
          <button 
            className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 text-lg rounded-lg hover:bg-blue-700 transition"
            onClick={() => router.push('/leases/condo')}
          >
            Start My Lease <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6">
        © 2025 REBNY Lease Generator. All rights reserved.
      </footer>
    </div>
  );
}