import { useNavigate } from "react-router-dom";
import { login } from "../libs/auth/auth";

export default function Login() {

  const navigate = useNavigate();

   const handleLogin = (e: React.FormEvent) => {
     e.preventDefault();

     login({
       name: "Raushan Kumar",
       photo: "",
     });

     navigate("/dashboard");
   };
  return (
    <div className="w-full max-w-7xl mx-auto h-screen flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
      <form className="w-120  border border-gray-300 shadow rounded text-center p-8 h-[55%] flex flex-col gap-4">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-roboto font-bold text-center">
          Login
        </h1>
        <p className="text-sm sm:text-lg lg:text-2xl font-poppins font-medium">
          Welcome to Employee Dashboard
        </p>
        <input
          type="email"
          placeholder="Email"
          className="border py-1 px-2 rounded-md border-gray-200 text-base font-medium shadow"
        />
        <input
          type="password"
          placeholder="Password"
          className="border py-1 px-2 rounded-md border-gray-200 text-base font-medium shadow"
        />
        <button
          type="submit"
          className="text-sm sm:text-base lg:text-xl py-1 font-poppins font-medium border border-blue-500 w-full max-w-32 mx-auto rounded-md text-blue-500 cursor-pointer"
          onClick={handleLogin}
        >
          Sign in
        </button>

        <p className="text-sm sm:text-lg lg:text-xl font-poppins font-medium">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500 cursor-pointer">
            Register
          </a>
        </p>
      </form>
      <div>
        <img
          src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVtcGxveWVlfGVufDB8fDB8fHww"
          alt="employee"
          className="rounded-md shadow object-contain"
        />
      </div>
    </div>
  );
}
