import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 py-8 sm:py-16 md:py-20 lg:py-28 xl:py-32">
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">REBNY Lease AI</span>
                  <span className="block text-blue-600">Professional Lease Generation</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Create legally compliant lease agreements in minutes. Our AI-powered system ensures all necessary clauses and requirements are included.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Lease Types Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Choose Your Lease Type
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Select the type of lease agreement you need to generate
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              <Link href="/leases/condo">
                <a className="relative group">
                  <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-200">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">Combined Condo Lease</h3>
                      <p className="mt-3 text-base text-gray-500">Generate a comprehensive lease agreement for condominium properties</p>
                    </div>
                    <div className="p-6 bg-gray-50 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <span className="text-base font-medium text-blue-600">Get Started</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>

              <Link href="/leases/coop">
                <a className="relative group">
                  <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-200">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">Combined Coop Lease</h3>
                      <p className="mt-3 text-base text-gray-500">Generate a comprehensive lease agreement for cooperative properties</p>
                    </div>
                    <div className="p-6 bg-gray-50 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <span className="text-base font-medium text-blue-600">Get Started</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>

              <Link href="/leases/townhome">
                <a className="relative group">
                  <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-200">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">Combined Townhome Lease</h3>
                      <p className="mt-3 text-base text-gray-500">Generate a comprehensive lease agreement for townhouse properties</p>
                    </div>
                    <div className="p-6 bg-gray-50 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <span className="text-base font-medium text-blue-600">Get Started</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>

              <Link href="/leases/rental">
                <a className="relative group">
                  <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-200">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">Standard Non-Stabilized Lease</h3>
                      <p className="mt-3 text-base text-gray-500">Generate a comprehensive lease agreement for rental properties</p>
                    </div>
                    <div className="p-6 bg-gray-50 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <span className="text-base font-medium text-blue-600">Get Started</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Everything you need in one place
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Legal Compliance</h3>
                      <p className="mt-2 text-base text-gray-500">
                        All necessary legal clauses and requirements included
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Quick Generation</h3>
                      <p className="mt-2 text-base text-gray-500">
                        Generate your lease in minutes, not hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Secure & Private</h3>
                      <p className="mt-2 text-base text-gray-500">
                        Your data is protected with enterprise-grade security
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 