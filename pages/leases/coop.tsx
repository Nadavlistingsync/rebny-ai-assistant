import React, { useState } from 'react';
import Layout from '../../components/Layout';
import LeaseForm from '../../components/LeaseForm';
import { createCheckoutSession } from '../../lib/stripe';
import { sendToPlumsail } from '../../lib/plumsail';

const CoopLeasePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: any) => {
    setIsLoading(true);
    try {
      // Create Stripe checkout session
      const checkoutUrl = await createCheckoutSession();
      
      if (!checkoutUrl) {
        throw new Error('Failed to create checkout session');
      }

      // Send data to Plumsail
      await sendToPlumsail({
        ...formData,
        leaseType: 'coop'
      });

      // Redirect to Stripe checkout
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Generate Your Coop Lease
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create a professional coop lease agreement in minutes. Our AI-powered system ensures all necessary clauses and legal requirements are included.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Compliance</h3>
            <p className="text-gray-600">All necessary legal clauses and requirements included</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Generation</h3>
            <p className="text-gray-600">Generate your lease in minutes, not hours</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Private</h3>
            <p className="text-gray-600">Your data is protected with enterprise-grade security</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Lease Information</h2>
            <p className="text-gray-600 mb-8">
              Fill out the lease information below. You'll be asked to pay before the lease is generated.
            </p>
            <LeaseForm onSubmit={handleSubmit} type="coop" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoopLeasePage; 