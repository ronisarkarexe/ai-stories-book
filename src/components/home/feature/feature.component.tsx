const FeatureComponent = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Posts</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img
            className="h-48 w-full object-cover"
            src="https://creatie.ai/ai/api/search-image?query=A modern workspace setup with a laptop, coffee cup, and notebook on a clean wooden desk, natural lighting streaming in, creating an inspiring environment for writing and creativity&width=800&height=400&orientation=landscape&flag=100d0a24-c9d9-4386-a5e3-cf219349a22e&flag=e652df52-c372-42c8-b6d0-6c19319a9446"
            alt=""
          />
          <div className="p-6">
            <div className="flex items-center mb-3">
              <img
                className="h-8 w-8 rounded-full"
                src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a young woman with a confident smile, wearing smart casual attire, against a light neutral background&width=200&height=200&orientation=squarish&flag=b088d960-ca78-4494-9a2e-6937b46ff541&flag=8863ecae-776f-478a-8e68-64e8302bd742"
                alt=""
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  Sarah Johnson
                </p>
                <p className="text-xs text-gray-500">Mar 16, 2024</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              10 Essential Tips for Better Writing
            </h3>
            <p className="text-gray-500 mb-4">
              Master the art of writing with these proven techniques that will
              help you create compelling content...
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="flex items-center mr-4">
                <i className="far fa-heart mr-1"></i> 234
              </span>
              <span className="flex items-center mr-4">
                <i className="far fa-comment mr-1"></i> 45
              </span>
              <span className="flex items-center">
                <i className="far fa-bookmark mr-1"></i> 89
              </span>
            </div>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img
            className="h-48 w-full object-cover"
            src="https://creatie.ai/ai/api/search-image?query=A minimalist desk setup with a tablet showing writing app, surrounded by indoor plants and natural light, creating a serene writing environment&width=800&height=400&orientation=landscape&flag=10536103-5411-45c5-8a90-8bcf8e8951ed&flag=8a5007ea-22c6-49dd-8d5a-06a5f7504a1c"
            alt=""
          />
          <div className="p-6">
            <div className="flex items-center mb-3">
              <img
                className="h-8 w-8 rounded-full"
                src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a middle-aged man with glasses, wearing a casual shirt, against a neutral background&width=200&height=200&orientation=squarish&flag=925e8bd7-8406-4ae1-b18a-8b7cf75d1c64&flag=c6a95517-a81d-4abd-8f5b-fdcd2edca3ff"
                alt=""
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  Michael Chen
                </p>
                <p className="text-xs text-gray-500">Mar 15, 2024</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              The Future of Digital Publishing
            </h3>
            <p className="text-gray-500 mb-4">
              Explore how technology is reshaping the landscape of content
              creation and distribution...
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="flex items-center mr-4">
                <i className="far fa-heart mr-1"></i> 156
              </span>
              <span className="flex items-center mr-4">
                <i className="far fa-comment mr-1"></i> 32
              </span>
              <span className="flex items-center">
                <i className="far fa-bookmark mr-1"></i> 67
              </span>
            </div>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img
            className="h-48 w-full object-cover"
            src="https://creatie.ai/ai/api/search-image?query=AI writing assistant concept with floating text and glowing circuits&width=800&height=400&flag=414c60ee-5e46-44ee-acae-de7271be4cc2"
            alt=""
          />
          <div className="p-6">
            <div className="flex items-center mb-3">
              <img
                className="h-8 w-8 rounded-full"
                src="https://creatie.ai/ai/api/search-image?query=AI avatar with glowing circuits&width=200&height=200&flag=56928576-f655-4d71-8176-02f671dfed8a"
                alt=""
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  AI Writing Assistant
                </p>
                <p className="text-xs text-gray-500">Available 24/7</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Generate Story Ideas with AI
            </h3>
            <p className="text-gray-500 mb-4">
              Let our AI help you brainstorm creative story ideas, develop
              characters, and overcome writer&#39;s block...
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mr-2">
                AI-Powered
              </span>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                Creative Writing
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FeatureComponent;
