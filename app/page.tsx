'use client';

import React, { useState } from 'react';
import questionsData from '../questions.json';

const LeaseFormPage = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Fill Out REBNY Lease</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {questionsData.questions.map(q => {
          if (q.condition) {
            const show = formData[q.condition.key] === q.condition.value;
            if (!show) return null;
          }

          return (
            <div key={q.key} className="flex flex-col">
              <label className="mb-1 font-medium">{q.question}</label>
              {q.type === 'text' && (
                <input
                  type="text"
                  className="border px-3 py-2 rounded"
                  value={formData[q.key] || ''}
                  onChange={e => handleChange(q.key, e.target.value)}
                />
              )}
              {q.type === 'choice' && (
                <select
                  className="border px-3 py-2 rounded"
                  value={formData[q.key] || ''}
                  onChange={e => handleChange(q.key, e.target.value)}
                >
                  <option value="">Select</option>
                  {q.options?.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
              {q.type === 'yesno' && (
                <select
                  className="border px-3 py-2 rounded"
                  value={formData[q.key] || ''}
                  onChange={e => handleChange(q.key, e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Y">Yes</option>
                  <option value="N">No</option>
                </select>
              )}
            </div>
          );
        })}
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Generate Lease
        </button>
      </form>
    </div>
  );
}

export default LeaseFormPage;