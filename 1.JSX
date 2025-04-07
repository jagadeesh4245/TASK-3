import React from 'react';

const TechStackOverview = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">📦 Tech Stack Overview</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🌐 Frontend</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Frameworks:</strong> React.js or Vue.js</li>
          <li><strong>Purpose:</strong> Build a dynamic and responsive user interface</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🖥️ Backend</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Frameworks:</strong> Node.js, Python (Django/Flask), or similar</li>
          <li><strong>Purpose:</strong> Handle API logic, authentication, and server-side processing</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">🗃️ Database</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Options:</strong> MongoDB (NoSQL) or PostgreSQL (SQL)</li>
          <li><strong>Purpose:</strong> Store and manage user data, logs, and application state</li>
        </ul>
      </div>
    </div>
  );
};

export default TechStackOverview;
