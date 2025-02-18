const HeroSectionComponent = () => {
  return (
    <section className="relative rounded-lg overflow-hidden mb-12 bg-gradient-to-r from-blue-950 to-purple-600 mt-5 mx-5">
      <div className="bg-custom">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl font-['Playfair_Display']">
              Share Your Story with the World
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-indigo-100">
              Connect, create, and inspire with words. Join our community. Let
              AI enhance your storytelling and creative journey.
            </p>
            <div className="mt-8 flex justify-center">
              <button className="!rounded-button inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-custom bg-white hover:bg-indigo-50">
                Try AI Writing{" "}
                <i className="fa-solid fa-wand-magic-sparkles ml-3"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionComponent;
