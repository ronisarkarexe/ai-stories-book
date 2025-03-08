import React from "react";

const StoriesComponent = () => {
  return (
    <div className="bg-gray-50">
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-gradient-to-br rounded-3xl shadow-s p-8 mb-6 border border-indigo-200 hover:border-indigo-300 transition-all duration-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-2 font-playfair">
                Create Your Story
              </h2>
              <p className="text-gray-600 mb-6">
                Let your imagination flow and watch as AI brings your story to
                life
              </p>
              <textarea
                rows={4}
                className="w-full border-2 border-indigo-200 rounded-2xl shadow-sm resize-none focus:ring-2 focus:ring-indigo-300 p-6 text-gray-300 min-h-[160px] transition-all duration-300"
                placeholder="Share your story seed..."
              ></textarea>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">
                    0/1000 characters
                  </span>
                  <div className="h-4 w-px bg-gray-300"></div>
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                    Clear text
                  </button>
                </div>
                <button className="!rounded-2xl bg-indigo-600 text-white px-8 py-3 font-medium hover:bg-indigo-700 transition-all duration-300 shadow-xl shadow-indigo-200 hover:scale-105">
                  <i className="fas fa-wand-magic-sparkles mr-2"></i>Generate
                  Story
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Generated Story</h3>
                <span className="text-sm text-gray-500">400 words</span>
              </div>
              <div className="prose max-w-none">
                <p>
                  In the heart of Silicon Valley, where innovation meets
                  imagination, a young developer named Alex sat before her
                  computer screen, fingers hovering over the keyboard. The soft
                  glow of the monitor illuminated her determined expression as
                  she prepared to test her latest creation – an AI storytelling
                  engine unlike any other.
                </p>
                <p>
                  The project had consumed her nights and weekends for months,
                  fueled by endless cups of coffee and an unwavering belief in
                  the power of artificial intelligence to enhance human
                  creativity, not replace it. Her algorithm was designed to
                  collaborate with writers, understanding context, emotion, and
                  narrative structure in ways previous systems could not.
                </p>
                <p>
                  As she initiated the program, lines of code transformed into
                  flowing prose before her eyes. The AI wove together elements
                  from countless stories it had analyzed, yet produced something
                  entirely original. It wasn't just regurgitating patterns – it
                  was creating art.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Story Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Genre
                  </label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom">
                    <option>Science Fiction</option>
                    <option>Fantasy</option>
                    <option>Mystery</option>
                    <option>Romance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tone
                  </label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom">
                    <option>Dramatic</option>
                    <option>Humorous</option>
                    <option>Dark</option>
                    <option>Inspirational</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Writing Style
                  </label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom">
                    <option>Descriptive</option>
                    <option>Concise</option>
                    <option>Poetic</option>
                    <option>Conversational</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Customize</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Font Family
                  </label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom">
                    <option>Playfair Display</option>
                    <option>Inter</option>
                    <option>Times New Roman</option>
                    <option>Arial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Font Size
                  </label>
                  <div className="flex items-center space-x-4">
                    <button className="!rounded-button p-2 border border-gray-300 hover:bg-gray-50">
                      <i className="fas fa-minus"></i>
                    </button>
                    <span className="text-sm font-medium">16px</span>
                    <button className="!rounded-button p-2 border border-gray-300 hover:bg-gray-50">
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Share Your Story</h3>
          <div className="flex flex-wrap gap-4">
            <button className="!rounded-button flex items-center px-4 py-2 bg-blue-600 text-white">
              <i className="fab fa-twitter mr-2"></i>Share on Twitter
            </button>
            <button className="!rounded-button flex items-center px-4 py-2 bg-blue-800 text-white">
              <i className="fab fa-facebook-f mr-2"></i>Share on Facebook
            </button>
            <button className="!rounded-button flex items-center px-4 py-2 bg-green-600 text-white">
              <i className="fas fa-envelope mr-2"></i>Email Story
            </button>
            <button className="!rounded-button flex items-center px-4 py-2 bg-gray-800 text-white">
              <i className="fas fa-download mr-2"></i>Download PDF
            </button>
            <button className="!rounded-button flex items-center px-4 py-2 border border-gray-300">
              <i className="fas fa-copy mr-2"></i>Copy to Clipboard
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StoriesComponent;
