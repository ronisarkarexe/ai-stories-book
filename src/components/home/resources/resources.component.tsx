import React from "react";

const resources = [
  {
    icon: "fas fa-magic",
    title: "AI Writing Assistant",
    description:
      "Get smart suggestions and overcome writer's block with AI-powered assistance.",
    linkText: "Learn more →",
    link: "#",
  },
  {
    icon: "fas fa-book",
    title: "Writing Templates",
    description:
      "Access professional templates for various writing styles and formats.",
    linkText: "Browse templates →",
    link: "#",
  },
  {
    icon: "fas fa-users",
    title: "Writing Community",
    description:
      "Connect with fellow writers, share feedback, and grow together.",
    linkText: "Join now →",
    link: "#",
  },
];

const ResourceComponent = () => {
  return (
    <div className="mx-5">
      <section className="mb-8 py-12 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-300">
            Writing Tools &amp; Resources
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Enhance your writing with our powerful tools and resources
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {resources.map((resource, index) => (
            <div key={index} className="bg-blue-500/10 p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4 text-indigo-700">
                <i className={resource.icon}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-400">{resource.title}</h3>
              <p className="text-gray-500 mb-4">{resource.description}</p>
              <a
                href={resource.link}
                className="text-indigo-500 hover:text-indigo-700 font-medium"
              >
                {resource.linkText}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResourceComponent;
