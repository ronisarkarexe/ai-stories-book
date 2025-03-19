import React from "react";

const feedbackData = [
  {
    name: "Sarah Mitchell",
    role: "Professional Writer",
    feedback:
      "The AI writing features have transformed how I create content. It's like having a creative partner!",
    imgSrc: "https://avatars.githubusercontent.com/u/143581455?v=4",
  },
  {
    name: "Robert Chen",
    role: "Content Strategist",
    feedback:
      "The AI tools have revolutionized my content creation process. Highly recommended!",
    imgSrc: "https://avatars.githubusercontent.com/u/143501055?v=4",
  },
  {
    name: "Emma Thompson",
    role: "Creative Director",
    feedback:
      "BlogVerse has helped me find my creative voice and connect with an amazing community of writers.",
    imgSrc: "https://avatars.githubusercontent.com/u/141581055?v=4",
  },
  {
    name: "Marcus Williams",
    role: "Tech Blogger",
    feedback:
      "The platform's AI capabilities and user-friendly interface make writing a joy.",
    imgSrc: "https://avatars.githubusercontent.com/u/143582055?v=4",
  },
];

const WriterFeedbackComponent = () => {
  return (
    <section className="mb-16 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-300">
            What Our Writers Say
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Hear from our community of writers about their experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {feedbackData.map((writer, index) => (
            <div
              key={index}
              className="bg-blue-500/10 p-6 rounded-xl transform transition-transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full ring-4 ring-white"
                  src={writer.imgSrc}
                  alt=""
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-400">
                    {writer.name}
                  </h4>
                  <p className="text-sm text-gray-400">{writer.role}</p>
                </div>
              </div>
              <p className="text-gray-500 italic">
                &#34;{writer.feedback}&#34;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WriterFeedbackComponent;
