import React, { useState } from 'react';
import { Shield, AlertCircle } from 'lucide-react';

export default function EmailChecker() {
  const [email, setEmail] = useState('');
  
  const handleCheck = () => {
    window.open(`https://haveibeenpwned.com/account/${encodeURIComponent(email)}`, '_blank');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Email Breach Checker 🔍</h2>
      
      <div className="space-y-4">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
            <p className="text-sm text-blue-700">
              Check if your email has been compromised in data breaches using the trusted 
              Have I Been Pwned service.
            </p>
          </div>
        </div>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter your email address"
        />

        <button
          onClick={handleCheck}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2"
        >
          <Shield className="h-5 w-5" />
          Check Email Security
        </button>
      </div>
    </div>
  );
}