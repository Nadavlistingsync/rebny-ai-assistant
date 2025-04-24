import React, { useState } from 'react';
import Layout from '../../components/Layout';
import LeaseForm from '../../components/LeaseForm';
import { createCheckoutSession } from '../../lib/stripe';
import { sendToPlumsail } from '../../lib/plumsail';

const CondoLeasePage = () => {
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
        leaseType: 'condo'
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
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">Generate a Condo Lease</h1>
        <p className="text-gray-600 mb-4">
          Fill out the lease information below. You'll be asked to pay before the lease is generated.
        </p>
        <LeaseForm onSubmit={handleSubmit} type="condo" />
      </div>
    </Layout>
  );
};

export default CondoLeasePage; 