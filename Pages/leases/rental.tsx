

import React from 'react';
import Layout from '../../components/Layout';
import LeaseForm from '../../components/LeaseForm';

const RentalLeasePage = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">Generate a Rental Lease</h1>
        <p className="text-gray-600 mb-4">
          Fill out the lease information below. You'll be asked to pay before the lease is generated.
        </p>
        <LeaseForm />
        {/* Stripe payment and submission logic will go here */}
      </div>
    </Layout>
  );
};

export default RentalLeasePage;