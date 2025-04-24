import React from 'react';
import Layout from '../components/Layout';

const Dashboard = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
        <p className="text-gray-700 mb-2">
          Thanks for your payment! Your lease document is being generated.
        </p>
        <p className="text-gray-700">
          You’ll receive an email with the final PDF shortly, or you can revisit this page to download it once ready.
        </p>
      </div>
    </Layout>
  );
};

export default Dashboard;
