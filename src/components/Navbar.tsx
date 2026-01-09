import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <div className="h-16 flex  items-center justify-between py-2 px-5 bg-white border border-gray-300">
      <h3 className="text-base font-poppins font-medium text-gray-500">
        Dashboard
      </h3>
      <button
        onClick={handleLogout}
        className="px-3 py-2 rounded border border-gray-100 bg-black text-white cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}
