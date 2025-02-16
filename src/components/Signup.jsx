import { useState } from "react";
import { Link } from "react-router";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log(formData);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 transform transition-all duration-300 hover:scale-[1.02]">
        <div className="bg-white p-8 rounded-2xl shadow-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[hsl(255,11%,22%)] mb-6">
              Create Your Account
            </h2>
            <p className="text-sm text-[hsl(257,7%,63%)] mb-8">
              Join us to start shortening your URLs
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Progress Steps */}
            <div className="flex justify-between mb-8">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-[hsl(180,66%,49%)] rounded-full flex items-center justify-center text-white">
                  1
                </div>
                <span className="text-xs mt-1">Account</span>
              </div>
              <div className="flex-1 flex items-center">
                <div className="h-1 w-full bg-[hsl(180,66%,49%)] opacity-30"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 border-2 border-[hsl(180,66%,49%)] rounded-full flex items-center justify-center text-[hsl(180,66%,49%)]">
                  2
                </div>
                <span className="text-xs mt-1">Profile</span>
              </div>
              <div className="flex-1 flex items-center">
                <div className="h-1 w-full bg-[hsl(180,66%,49%)] opacity-30"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 border-2 border-[hsl(180,66%,49%)] rounded-full flex items-center justify-center text-[hsl(180,66%,49%)]">
                  3
                </div>
                <span className="text-xs mt-1">Complete</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[hsl(180,66%,49%)] focus:border-[hsl(180,66%,49%)] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[hsl(180,66%,49%)] focus:border-[hsl(180,66%,49%)] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[hsl(180,66%,49%)] focus:border-[hsl(180,66%,49%)] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[hsl(180,66%,49%)] focus:border-[hsl(180,66%,49%)] transition-colors"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="agreeToTerms"
                  name="agreeToTerms"
                  type="checkbox"
                  required
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="h-4 w-4 text-[hsl(180,66%,49%)] focus:ring-[hsl(180,66%,49%)] border-gray-300 rounded"
                />
                <label
                  htmlFor="agreeToTerms"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-[hsl(180,66%,49%)] hover:text-[hsl(257,27%,26%)]"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-[hsl(180,66%,49%)] hover:text-[hsl(257,27%,26%)]"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[hsl(180,66%,49%)] hover:bg-[hsl(257,27%,26%)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(180,66%,49%)] transition-colors"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-[hsl(180,66%,49%)] hover:text-[hsl(257,27%,26%)]"
            >
              Sign in instead
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
