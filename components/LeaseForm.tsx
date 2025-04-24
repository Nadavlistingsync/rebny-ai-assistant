import React from 'react';

const LeaseForm = () => {
  return (
    <div className="lease-form">
      <h2>Select Lease Type</h2>
      <form>
        <label htmlFor="leaseType">Lease Type:</label>
        <select id="leaseType" name="leaseType">
          <option value="condo">Combined Condo Lease</option>
          <option value="coop">Combined Coop Lease</option>
          <option value="townhome">Combined Townhome Lease</option>
          <option value="non-stabilized">Standard Non Stabilized Lease</option>
        </select>
      </form>
    </div>
  );
};

export default LeaseForm;
