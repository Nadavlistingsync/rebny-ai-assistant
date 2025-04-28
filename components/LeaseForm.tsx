import { useState } from 'react';

interface LeaseFormData {
  LeaseStartDate: string;
  OwnerName: string;
  OwnerAddress: string;
  TenantName: string;
  TenantAddress: string;
  UnitNumber: string;
  FloorNumber: string;
  BuildingAddress: string;
  Borough: string;
  City: string;
  PermittedOccupants: string;
  LeaseCommencementDate: string;
  LeaseEndDate: string;
  LeaseTermMonths: string;
  MonthlyRent: string;
  SecurityDeposit: string;
  LeasePackageFees: string;
  SecurityDepositBankName: string;
  SecurityDepositBankAddress: string;
  ApprovedAlterations: string;
  OwnerInitial: string;
  TenantInitial: string;
  RequiredServices: string;
  IncludedUtilities: string;
  ApplianceRepairResponsibility: string;
  OwnerMailingAddress1: string;
  OwnerMailingAddress2: string;
  OwnerMailingCityStateZip: string;
  OwnerContactName: string;
  OwnerCCAddress1: string;
  OwnerCCAddress2: string;
  OwnerCCCityStateZip: string;
  OwnerCCContactName: string;
  TenantEmail: string;
  TenantPreCommAddress1: string;
  TenantPreCommAddress2: string;
  TenantPreCommCityStateZip: string;
  TenantPhoneNumber: string;
  GeneralLiabilityAmount: string;
  GeneralLiabilityAmountNumeric: string;
  UmbrellaPolicyAmount: string;
  BrokerName: string;
  ExtensionYears: string;
  ExtensionStartDate: string;
  ExtensionEndDate: string;
  ExtensionTermRent: string;
  PetDescription: string;
  GuarantorSignatureDate: string;
  GuarantorName1: string;
  GuarantorAddress1: string;
  GuarantorDay1: string;
  GuarantorMonth1: string;
  GuarantorYear1: string;
  GuarantorAppearedName2: string;
  GuarantorName2: string;
  GuarantorAddress2: string;
  GuarantorDay2: string;
  GuarantorMonth2: string;
  GuarantorYear2: string;
}

interface LeaseFormProps {
  onSubmit: (data: LeaseFormData) => void;
  type: string;
}

const LeaseForm = ({ onSubmit, type }: LeaseFormProps) => {
  const [formData, setFormData] = useState<LeaseFormData>({
    LeaseStartDate: '',
    OwnerName: '',
    OwnerAddress: '',
    TenantName: '',
    TenantAddress: '',
    UnitNumber: '',
    FloorNumber: '',
    BuildingAddress: '',
    Borough: '',
    City: '',
    PermittedOccupants: '',
    LeaseCommencementDate: '',
    LeaseEndDate: '',
    LeaseTermMonths: '',
    MonthlyRent: '',
    SecurityDeposit: '',
    LeasePackageFees: '',
    SecurityDepositBankName: '',
    SecurityDepositBankAddress: '',
    ApprovedAlterations: '',
    OwnerInitial: '',
    TenantInitial: '',
    RequiredServices: '',
    IncludedUtilities: '',
    ApplianceRepairResponsibility: '',
    OwnerMailingAddress1: '',
    OwnerMailingAddress2: '',
    OwnerMailingCityStateZip: '',
    OwnerContactName: '',
    OwnerCCAddress1: '',
    OwnerCCAddress2: '',
    OwnerCCCityStateZip: '',
    OwnerCCContactName: '',
    TenantEmail: '',
    TenantPreCommAddress1: '',
    TenantPreCommAddress2: '',
    TenantPreCommCityStateZip: '',
    TenantPhoneNumber: '',
    GeneralLiabilityAmount: '',
    GeneralLiabilityAmountNumeric: '',
    UmbrellaPolicyAmount: '',
    BrokerName: '',
    ExtensionYears: '',
    ExtensionStartDate: '',
    ExtensionEndDate: '',
    ExtensionTermRent: '',
    PetDescription: '',
    GuarantorSignatureDate: '',
    GuarantorName1: '',
    GuarantorAddress1: '',
    GuarantorDay1: '',
    GuarantorMonth1: '',
    GuarantorYear1: '',
    GuarantorAppearedName2: '',
    GuarantorName2: '',
    GuarantorAddress2: '',
    GuarantorDay2: '',
    GuarantorMonth2: '',
    GuarantorYear2: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/generate-lease', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          leaseType: type
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate lease');
      }

      const data = await response.json();
      onSubmit(formData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {type.charAt(0).toUpperCase() + type.slice(1)} Lease Information
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Property Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Property Information</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="BuildingAddress" className="block text-sm font-medium text-gray-700">
                  Building Address
                </label>
                <input
                  type="text"
                  id="BuildingAddress"
                  name="BuildingAddress"
                  value={formData.BuildingAddress}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="UnitNumber" className="block text-sm font-medium text-gray-700">
                  Unit Number
                </label>
                <input
                  type="text"
                  id="UnitNumber"
                  name="UnitNumber"
                  value={formData.UnitNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="FloorNumber" className="block text-sm font-medium text-gray-700">
                  Floor Number
                </label>
                <input
                  type="text"
                  id="FloorNumber"
                  name="FloorNumber"
                  value={formData.FloorNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="Borough" className="block text-sm font-medium text-gray-700">
                  Borough
                </label>
                <input
                  type="text"
                  id="Borough"
                  name="Borough"
                  value={formData.Borough}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Owner Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Owner Information</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="OwnerName" className="block text-sm font-medium text-gray-700">
                  Owner Name
                </label>
                <input
                  type="text"
                  id="OwnerName"
                  name="OwnerName"
                  value={formData.OwnerName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="OwnerAddress" className="block text-sm font-medium text-gray-700">
                  Owner Address
                </label>
                <input
                  type="text"
                  id="OwnerAddress"
                  name="OwnerAddress"
                  value={formData.OwnerAddress}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Tenant Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Tenant Information</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="TenantName" className="block text-sm font-medium text-gray-700">
                  Tenant Name
                </label>
                <input
                  type="text"
                  id="TenantName"
                  name="TenantName"
                  value={formData.TenantName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="TenantEmail" className="block text-sm font-medium text-gray-700">
                  Tenant Email
                </label>
                <input
                  type="email"
                  id="TenantEmail"
                  name="TenantEmail"
                  value={formData.TenantEmail}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Lease Terms */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Lease Terms</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="LeaseStartDate" className="block text-sm font-medium text-gray-700">
                  Lease Start Date
                </label>
                <input
                  type="date"
                  id="LeaseStartDate"
                  name="LeaseStartDate"
                  value={formData.LeaseStartDate}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="LeaseEndDate" className="block text-sm font-medium text-gray-700">
                  Lease End Date
                </label>
                <input
                  type="date"
                  id="LeaseEndDate"
                  name="LeaseEndDate"
                  value={formData.LeaseEndDate}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="MonthlyRent" className="block text-sm font-medium text-gray-700">
                  Monthly Rent
                </label>
                <input
                  type="number"
                  id="MonthlyRent"
                  name="MonthlyRent"
                  value={formData.MonthlyRent}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="SecurityDeposit" className="block text-sm font-medium text-gray-700">
                  Security Deposit
                </label>
                <input
                  type="number"
                  id="SecurityDeposit"
                  name="SecurityDeposit"
                  value={formData.SecurityDeposit}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
