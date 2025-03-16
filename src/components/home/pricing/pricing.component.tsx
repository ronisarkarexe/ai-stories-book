import React from "react";

const PricingComponent = () => {
  return (
    <section className="mb-16 py-12" id="pricing-section">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Choose the plan that best fits your needs
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <div className="bg-blue-500/20 p-8 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-2">Free</h3>
          <div className="mb-4">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-gray-500">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <i className="fas fa-check text-green-500 mr-2"></i>
              <span>Basic AI writing assistance</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check text-green-500 mr-2"></i>
              <span>5 stories per month</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check text-green-500 mr-2"></i>
              <span>Community access</span>
            </li>
          </ul>
          <button className="w-full !rounded-button bg-gray-100 text-gray-800 px-4 py-2 hover:bg-gray-200">
            Get Started
          </button>
        </div>
        <div className="bg-blue-500/20 p-8 rounded-lg shadow-sm border border-indigo-600 relative transform scale-105">
          <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
            Popular
          </div>
          <h3 className="text-xl font-semibold mb-2">Pro</h3>
          <div className="mb-4">
            <span className="text-4xl font-bold">$19</span>
            <span className="text-gray-500">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <i className="fas fa-check text-green-500 mr-2"></i>
              <span>Advanced AI writing tools</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check text-green-500 mr-2"></i>
              <span>Unlimited stories</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check text-green-500 mr-2"></i>
              <span>Priority support</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check text-green-500 mr-2"></i>
              <span>Analytics dashboard</span>
            </li>
          </ul>
          <button className="w-full !rounded-button bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700">
            Start Pro Trial
          </button>
        </div>
        <div className="bg-blue-500/20 p-8 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
          <div className="mb-4">
            <span className="text-4xl font-bold">$49</span>
            <span className="text-gray-500">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <i className="fas fa-check text-green-500 mr-2"></i>
              <span>Custom AI models</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check text-green-500 mr-2"></i>
              <span>Team collaboration</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check text-green-500 mr-2"></i>
              <span>API access</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check text-green-500 mr-2"></i>
              <span>24/7 dedicated support</span>
            </li>
          </ul>
          <button className="w-full !rounded-button bg-gray-800 text-white px-4 py-2 hover:bg-gray-900">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;
