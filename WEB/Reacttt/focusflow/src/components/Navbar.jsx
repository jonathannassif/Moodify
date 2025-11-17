import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-8 py-4 bg-white shadow-sm">
      <Link to="/" className="text-lg font-medium hover:text-blue-600">
        Home
      </Link>
      <Link to="/timer" className="text-lg font-medium hover:text-blue-600">
        Focus Timer
      </Link>
    </nav>
  );
}