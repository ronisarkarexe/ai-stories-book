import aiBook from "../../assets/ailoginbooktwo.jpg";
import logo from "../../assets/logo.png";

const LoginComponent = () => {
  return (
    <body className="bg-gray-50">
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-8xl w-full px-4">
          <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden mx-auto max-w-6xl">
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col">
              <div className="flex items-center mb-5">
                <img
                  src={logo}
                  alt="AI Stories Book"
                  className="h-10 w-auto mr-3"
                />
                <h1 className="text-2xl font-bold text-gray-900">
                  AI Stories Book
                </h1>
              </div>
              <form id="loginForm" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      className="w-full pl-12 pr-4 py-1 border border-gray-300 rounded-lg focus:ring-custom focus:border-custom"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="w-full pl-12 pr-4 py-1 border border-gray-300 rounded-lg focus:ring-custom focus:border-custom"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-custom border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Remember me
                    </span>
                  </label>
                  <a
                    href="#"
                    className="text-sm text-custom hover:text-custom-600"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="!rounded-button w-full bg-indigo-600 text-white py-1 font-medium hover:bg-custom-600 transition-colors"
                >
                  Login
                </button>
              </form>
              <div className="mt-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <button className="!rounded-button flex items-center justify-center px-4 py-1 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <i className="fab fa-google text-red-500 mr-2"></i>
                    Google
                  </button>
                  <button className="!rounded-button flex items-center justify-center px-4 py-1 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <i className="fab fa-facebook text-blue-600 mr-2"></i>
                    Facebook
                  </button>
                </div>
              </div>
              <div className="mt-auto text-center text-sm text-gray-500">
                <div className="mt-4 text-center">
                  <p className="text-gray-600">
                    Don&#39;t have an account?
                    <a
                      href="/signup"
                      className="text-primary hover:text-primary-dark font-semibold"
                    >
                      Sign up
                    </a>
                  </p>
                </div>
                <p>© 2024 AI Stories Book. All rights reserved.</p>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 relative">
              <img
                src={aiBook}
                alt="AI Stories Illustration"
                className="absolute inset-0 w-full min-h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default LoginComponent;
