'use client';

import React, { useState } from 'react';
// @ts-ignore
import questionsData from './lib/questions.json';

type Question = {
  key: string;
  question: string;
  type: 'text' | 'choice' | 'yesno';
  options?: string[];
  condition?: {
    key: string;
    value: string;
  };
};

const LeaseFormPage = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleChange = (key: string, value: string) => {
    setFormData((prev: { [key: string]: string }) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/generate-lease', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'REBNY_Lease.pdf';
        a.click();
      } else {
        alert('Failed to generate lease PDF.');
      }
    } catch (err) {
      console.error('Error generating lease:', err);
    }
  };

  const questions = Array.isArray(questionsData.questions) ? questionsData.questions as Question[] : [];

  return (
    <div className="max-w-3xl mx-auto p-10 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Fill Out REBNY Lease</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {questions.map((q: Question, index: number) => {
          if (q.condition) {
            const show = formData[q.condition.key] === q.condition.value;
            if (!show) return null;
          }

          return (
            <div key={q.key} className="p-4 border border-gray-200 rounded bg-white shadow-sm">
              <label className="mb-1 font-medium">{q.question}</label>
              {q.type === 'text' && (
                <input
                  type="text"
                  className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData[q.key] || ''}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(q.key, e.target.value)}
                />
              )}
              {q.type === 'choice' && (
                <select
                  className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData[q.key] || ''}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(q.key, e.target.value)}
                >
                  <option value="">Select</option>
                  {q.options?.map((option: string) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
              {q.type === 'yesno' && (
                <select
                  className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData[q.key] || ''}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(q.key, e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Y">Yes</option>
                  <option value="N">No</option>
                </select>
              )}
              {index % 6 === 5 && <hr className="my-6 border-gray-300" />}
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