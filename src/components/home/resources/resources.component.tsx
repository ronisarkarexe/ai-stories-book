import React from "react";


const ResourceComponent = () => {
  return (
    <div className="mx-5">
      <section className="mb-16 py-12 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Writing Tools &amp; Resources
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Enhance your writing with our powerful tools and resources
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl mb-4 text-custom">
              <i className="fas fa-magic"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Writing Assistant</h3>
            <p className="text-gray-600 mb-4">
              Get smart suggestions and overcome writer&#39;s block with
              AI-powered assistance.
            </p>
            <a
              href="#"
              className="text-custom hover:text-indigo-700 font-medium"
            >
              Learn more →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl mb-4 text-custom">
              <i className="fas fa-book"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Writing Templates</h3>
            <p className="text-gray-600 mb-4">
              Access professional templates for various writing styles and
              formats.
            </p>
            <a
              href="#"
              className="text-custom hover:text-indigo-700 font-medium"
            >
              Browse templates →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl mb-4 text-custom">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Writing Community</h3>
            <p className="text-gray-600 mb-4">
              Connect with fellow writers, share feedback, and grow together.
            </p>
            <a
              href="#"
              className="text-custom hover:text-indigo-700 font-medium"
            >
              Join now →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourceComponent;
