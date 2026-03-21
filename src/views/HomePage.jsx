import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight">
        Build your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Professional
        </span>{" "}
        CV
      </h1>
      <p className="mt-6 text-xl text-gray-600 max-w-2xl">
        Stand out from the crowd with a premium resume designed for modern
        standards.
      </p>
      <div className="mt-10 flex gap-4">
        <NavLink to="/DrawingPage">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            Get Started
          </button>
        </NavLink>
        <NavLink to="/LearnMore">
          <button className="px-8 py-3 border border-gray-200 text-gray-600 font-semibold rounded-full hover:bg-gray-50 transition-all">
            Learn More
          </button>
        </NavLink>
      </div>
    </div>
  );
}
