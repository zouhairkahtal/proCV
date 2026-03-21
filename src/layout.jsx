import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <NavBar />
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
