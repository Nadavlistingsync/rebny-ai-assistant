import React from 'react';
import Navbar from './Navbar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">REBNY Lease AI</h3>
              <p className="text-gray-600">
                Professional lease generation powered by artificial intelligence.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/leases/condo" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Condo Leases
                  </a>
                </li>
                <li>
                  <a href="/leases/coop" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Co-op Leases
                  </a>
                </li>
                <li>
                  <a href="/leases/rental" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Rental Leases
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">
                  <a href="mailto:support@rebnyleaseai.com" className="hover:text-blue-600 transition-colors">
                    support@rebnyleaseai.com
                  </a>
                </li>
                <li className="text-gray-600">
                  <a href="tel:+12125551234" className="hover:text-blue-600 transition-colors">
                    (212) 555-1234
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-500">
              © {new Date().getFullYear()} REBNY Lease AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
