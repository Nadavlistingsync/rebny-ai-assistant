import { useState } from 'react';

interface LeaseFormProps {
  onSubmit: (data: any) => void;
  type: string;
}

const LeaseForm = ({ onSubmit, type }: LeaseFormProps) => {
  const [formData, setFormData] = useState({
    propertyAddress: '',
    tenantName: '',
    leaseStartDate: '',
    leaseEndDate: '',
    monthlyRent: '',
    securityDeposit: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {type.charAt(0).toUpperCase() + type.slice(1)} Lease Information
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700">
                Property Address
              </label>
              <input
                type="text"
                id="propertyAddress"
                name="propertyAddress"
                value={formData.propertyAddress}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="tenantName" className="block text-sm font-medium text-gray-700">
                Tenant Name
              </label>
              <input
                type="text"
                id="tenantName"
                name="tenantName"
                value={formData.tenantName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="leaseStartDate" className="block text-sm font-medium text-gray-700">
                Lease Start Date
              </label>
              <input
                type="date"
                id="leaseStartDate"
                name="leaseStartDate"
                value={formData.leaseStartDate}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="leaseEndDate" className="block text-sm font-medium text-gray-700">
                Lease End Date
              </label>
              <input
                type="date"
                id="leaseEndDate"
                name="leaseEndDate"
                value={formData.leaseEndDate}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="monthlyRent" className="block text-sm font-medium text-gray-700">
                Monthly Rent
              </label>
              <input
                type="number"
                id="monthlyRent"
                name="monthlyRent"
                value={formData.monthlyRent}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="securityDeposit" className="block text-sm font-medium text-gray-700">
                Security Deposit
              </label>
              <input
                type="number"
                id="securityDeposit"
                name="securityDeposit"
                value={formData.securityDeposit}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Generate Lease
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaseForm;
