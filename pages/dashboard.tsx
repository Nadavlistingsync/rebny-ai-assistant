import React from 'react';
import Layout from '../components/Layout';

const stats = [
  { label: 'Leases Generated', value: 128 },
  { label: 'Active Users', value: 42 },
  { label: 'Documents Signed', value: 87 },
];

const Dashboard = () => (
  <Layout>
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow p-6 text-center">
            <div className="text-4xl font-extrabold text-blue-600 mb-2">{stat.value}</div>
            <div className="text-lg text-gray-700">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Dashboard; 