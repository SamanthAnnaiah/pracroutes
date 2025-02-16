function Resources() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[hsl(255,11%,22%)] mb-4">
          Resources & Tools
        </h1>
        <p className="text-[hsl(257,7%,63%)] max-w-2xl mx-auto">
          Explore our collection of resources to help you make the most of your
          shortened URLs and boost your online presence.
        </p>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* API Documentation */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div className="h-3 bg-[hsl(180,66%,49%)]"></div>
          <div className="p-6">
            <div className="w-12 h-12 bg-[hsl(257,27%,26%)] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[hsl(255,11%,22%)] mb-2">
              API Documentation
            </h3>
            <p className="text-[hsl(257,7%,63%)] mb-4">
              Comprehensive guides and API references for developers to
              integrate our URL shortening service.
            </p>
            <a
              href="#"
              className="text-[hsl(180,66%,49%)] hover:text-[hsl(257,27%,26%)] font-bold flex items-center"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div className="h-3 bg-[hsl(180,66%,49%)]"></div>
          <div className="p-6">
            <div className="w-12 h-12 bg-[hsl(257,27%,26%)] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[hsl(255,11%,22%)] mb-2">
              Best Practices
            </h3>
            <p className="text-[hsl(257,7%,63%)] mb-4">
              Learn how to create effective short URLs and maximize their impact
              in your marketing campaigns.
            </p>
            <a
              href="#"
              className="text-[hsl(180,66%,49%)] hover:text-[hsl(257,27%,26%)] font-bold flex items-center"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Analytics Guide */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div className="h-3 bg-[hsl(180,66%,49%)]"></div>
          <div className="p-6">
            <div className="w-12 h-12 bg-[hsl(257,27%,26%)] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[hsl(255,11%,22%)] mb-2">
              Analytics Guide
            </h3>
            <p className="text-[hsl(257,7%,63%)] mb-4">
              Detailed explanations of our analytics features and how to
              interpret your link performance data.
            </p>
            <a
              href="#"
              className="text-[hsl(180,66%,49%)] hover:text-[hsl(257,27%,26%)] font-bold flex items-center"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Help Center */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div className="h-3 bg-[hsl(180,66%,49%)]"></div>
          <div className="p-6">
            <div className="w-12 h-12 bg-[hsl(257,27%,26%)] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[hsl(255,11%,22%)] mb-2">
              Help Center
            </h3>
            <p className="text-[hsl(257,7%,63%)] mb-4">
              Find answers to common questions and learn how to resolve
              technical issues quickly.
            </p>
            <a
              href="#"
              className="text-[hsl(180,66%,49%)] hover:text-[hsl(257,27%,26%)] font-bold flex items-center"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Case Studies */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div className="h-3 bg-[hsl(180,66%,49%)]"></div>
          <div className="p-6">
            <div className="w-12 h-12 bg-[hsl(257,27%,26%)] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[hsl(255,11%,22%)] mb-2">
              Case Studies
            </h3>
            <p className="text-[hsl(257,7%,63%)] mb-4">
              Real-world examples of how businesses have succeeded using our URL
              shortening service.
            </p>
            <a
              href="#"
              className="text-[hsl(180,66%,49%)] hover:text-[hsl(257,27%,26%)] font-bold flex items-center"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Community */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div className="h-3 bg-[hsl(180,66%,49%)]"></div>
          <div className="p-6">
            <div className="w-12 h-12 bg-[hsl(257,27%,26%)] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[hsl(255,11%,22%)] mb-2">
              Community
            </h3>
            <p className="text-[hsl(257,7%,63%)] mb-4">
              Join our community forum to share experiences and get tips from
              other users.
            </p>
            <a
              href="#"
              className="text-[hsl(180,66%,49%)] hover:text-[hsl(257,27%,26%)] font-bold flex items-center"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
