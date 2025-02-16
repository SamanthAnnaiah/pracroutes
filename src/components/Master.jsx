function Master() {
  return (
    <div className="w-full max-w-md transform transition-all duration-300 hover:scale-105">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-2">
          <h2 className="text-2xl font-bold text-[hsl(255,11%,22%)] mb-4">
            Master
          </h2>
          <div className="flex items-baseline mb-8">
            <span className="text-4xl font-bold text-[hsl(257,27%,26%)]">
              $99
            </span>
            <span className="text-gray-500 ml-2">/month</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-[hsl(180,66%,49%)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="ml-4 text-gray-600">Unlimited Links</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-[hsl(180,66%,49%)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="ml-4 text-gray-600">Enterprise Analytics</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-[hsl(180,66%,49%)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="ml-4 text-gray-600">Custom Domain Links</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-[hsl(180,66%,49%)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="ml-4 text-gray-600">API Access</span>
            </div>
          </div>
        </div>

        <div className="p-8 bg-gray-50">
          <button
            className="w-full py-3 px-6 text-white rounded-full bg-[hsl(180,66%,49%)] 
            hover:bg-[hsl(257,27%,26%)] transition-colors duration-300 transform 
            hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[hsl(180,66%,49%)] 
            focus:ring-opacity-50"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Master;
