import { useNavigate } from "react-router";

function Features() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-8 m-auto mt-12 w-[80%] max-w-[1200px]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[hsl(255,11%,22%)] mb-4">
          Features That Empower Your Links
        </h1>
        <p className="text-[hsl(257,7%,63%)] max-w-[600px] mx-auto">
          Transform your long URLs into powerful marketing tools with our
          comprehensive feature set
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-8">
        {/* Analytics Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="dv1 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23 8c0 1.1-.9 2-2 2a1.7 1.7 0 0 1-.7-.15l-2.55 2.55c.16.22.25.48.25.76 0 .41-.17.79-.44 1.06L14.06 18H20v2H4v-2h6.06l-3.5-3.5A1.5 1.5 0 0 1 6 13.24c0-.28.09-.54.25-.76L3.7 9.93a2 2 0 0 1-1.7.07 2 2 0 1 1 2-2c0 .28-.09.54-.25.76l2.55 2.55c.16-.22.25-.48.25-.76a2 2 0 1 1 4 0c0 .28-.09.54-.25.76l2.55 2.55c.16-.22.25-.48.25-.76a2 2 0 1 1 2 2c0-.28.09-.54.25-.76l-2.55-2.55a2 2 0 0 1 .7-3.85 2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-[hsl(260,8%,14%)] mb-3">
            Advanced Analytics
          </h2>
          <p className="text-[hsl(257,7%,63%)] text-sm">
            Gain deep insights into your link performance with detailed click
            tracking and geographic data
          </p>
        </div>

        {/* Custom Links Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="dv1 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-[hsl(260,8%,14%)] mb-3">
            Custom Links
          </h2>
          <p className="text-[hsl(257,7%,63%)] text-sm">
            Create branded links that match your identity and boost recognition
            among your audience
          </p>
        </div>

        {/* API Access Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="dv1 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-[hsl(260,8%,14%)] mb-3">
            API Integration
          </h2>
          <p className="text-[hsl(257,7%,63%)] text-sm">
            Seamlessly integrate our URL shortening service into your
            applications with our robust API
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-[hsl(180,66%,49%)] text-white px-8 py-3 rounded-full mt-8 
        hover:opacity-70 transition-opacity cursor-pointer"
      >
        Get Started
      </button>
    </div>
  );
}

export default Features;
