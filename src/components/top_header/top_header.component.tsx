import logo from "../../assets/logo.png";

const TopHeaderComponent = () => {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="/" className="flex-shrink-0">
                <img className="h-9 w-auto" src={logo} alt="logo" />
              </a>
              <a
                href="#"
                className="border-custom text-custom inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Explore
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Categories
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button
                type="button"
                className="!rounded-button p-2 text-gray-400 hover:text-gray-500"
              >
                <i className="fas fa-search"></i>
              </button>
              <div className="ml-3 relative">
                <div>
                  <button
                    type="button"
                    className="!rounded-button p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <i className="fa-solid fa-bell"></i>
                  </button>
                </div>
              </div>
              <div className="ml-3 relative">
                <div>
                  <button
                    type="button"
                    className="!rounded-button bg-white flex text-sm rounded-full focus:outline-none"
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://avatars.githubusercontent.com/u/76697055?v=4"
                      alt="profile"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopHeaderComponent;
