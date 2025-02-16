import { useReducer } from "react";
import { Outlet, Link } from "react-router";

function Pricing() {
  const [plan, plandispatch] = useReducer(planReducer, "");
  function planReducer(state, action) {
    let { type, payload } = action;
    switch (type) {
      case "b":
        return payload;
      case "p":
        return payload;
      case "m":
        return payload;
      default:
        return state;
    }
  }
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <h1 className="text-3xl font-bold text-[hsl(255,11%,22%)]">
        Pricing Plans
      </h1>

      <div className="flex gap-4 mb-8">
        <Link
          to="/pricing/basic"
          className={`px-4 py-2 text-gray-500 hover:text-black rounded-md
            ${plan === "basic" ? "bg-cyan-600 text-white" : ""}`}
          onClick={() => plandispatch({ type: "b", payload: "basic" })}
        >
          Basic
        </Link>
        <Link
          to="/pricing/professional"
          className={`px-4 py-2 text-gray-500 hover:text-black rounded-md
            ${plan === "professional" ? "bg-cyan-600 text-white" : ""}`}
          onClick={() => plandispatch({ type: "p", payload: "professional" })}
        >
          Professional
        </Link>
        <Link
          to="/pricing/master"
          className={`px-4 py-2 text-gray-500 hover:text-black rounded-md
                ${plan === "master" ? "bg-cyan-600 text-white" : ""}`}
          onClick={() => plandispatch({ type: "m", payload: "master" })}
        >
          Master
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Pricing;
