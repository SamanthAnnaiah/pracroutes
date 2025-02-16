import { Link } from "react-router";

function Plinks() {
  return (
    <nav className="flex flex-row justify-start items-center gap-4 p-4">
      <Link className="text-black-500 text-4xl hover:text-cyan-600" to="/">
        Shortly
      </Link>
      <Link className="text-gray-500 hover:text-cyan-600 ml-7" to="/features">
        Features
      </Link>
      <Link className="text-gray-500 hover:text-cyan-600" to="/pricing">
        Pricing
      </Link>
      <Link className="text-gray-500 hover:text-cyan-600" to="/resources">
        Resources
      </Link>
      <Link
        className="ml-[900px] text-gray-500 hover:text-cyan-600"
        to="/login"
      >
        Login
      </Link>
      <Link
        className="text-black-200 hover:text-white-600 bg-cyan-400
        hover:bg-cyan-200 p-2 rounded-lg"
        to="/signup"
      >
        Signup
      </Link>
    </nav>
  );
}

export default Plinks;
