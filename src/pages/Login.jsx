import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

const FIXED_USER = {
  email: "admin@example.com",
  password: "admin123",
  role: "admin",
  name: "Engr Sami",
};

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email !== FIXED_USER.email || password !== FIXED_USER.password) {
      setError("Invalid email or password");
      return;
    }

    const userData = {
      email: FIXED_USER.email,
      role: FIXED_USER.role,
      name: FIXED_USER.name,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    if (remember) {
      localStorage.setItem("rememberUser", "true");
    }

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="bg-gray-900 w-full max-w-md rounded-2xl shadow-xl p-8">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center mb-2">
          Welcome Back 👋
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Sign in to your admin dashboard
        </p>

        {/* Error */}
        {error && (
          <div className="bg-red-100 text-red-600 text-sm p-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="rounded"
              />
              Remember me
            </label>

            <span className="text-sm text-blue-600 cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Demo credentials:
          <br />
          <span className="font-medium">admin@example.com / admin123</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
