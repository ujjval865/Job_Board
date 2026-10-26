import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loginError, setLoginError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear old errors

    setEmail("");
    setPasswordError("");

    // Get registered user
    const storedUser = localStorage.getItem("userData");

    if (!storedUser) {
      setLoginError("No account found. Please sign up first.");
    }

    const userData = JSON.parse(storedUser);

    if (email !== userData.email) {
      setEmailError("Please enter a valid email");
      return;
    }

    setEmailError("");

    if (password !== userData.password) {
      setPasswordError("Pleae enter the valid password");
      return;
    }

    setPasswordError("");

    // Login successfull

    localStorage.setItem("isLoggedIn", true);

    //    Go to main website
    navigate("/");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#111827] px-4 text-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl rounded-xl border border-gray-700 bg-[#1f2937] p-8 sm:p-12 md:p-16"
      >
        {/* Heading */}
        <h1 className="mb-10 text-3xl font-bold sm:text-4xl">
          Log in to your account
        </h1>

        {/* Email */}
        <div className="mb-8">
          <label htmlFor="email" className="mb-3 block text-lg font-semibold">
            Your email
          </label>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="name@company.com"
            className="w-full rounded-xl border border-gray-600 bg-[#374151] px-4 py-4 text-lg text-white outline-none placeholder:text-gray-400 focus:border-blue-500"
          />

          {emailError && (
            <p className="mt-2 text-sm text-red-400">{emailError}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-5">
          <label
            htmlFor="password"
            className="mb-3 block text-lg font-semibold"
          >
            Password
          </label>

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full rounded-xl border border-gray-600 bg-[#374151] px-4 py-4 text-lg text-white outline-none placeholder:text-gray-400 focus:border-blue-500"
          />

          {passwordError && (
            <p className="mt-2 text-sm text-red-400">{passwordError}</p>
          )}
        </div>

        {/* Forgot Password */}
        <div className="mb-8 flex justify-end">
          <button
            type="button"
            className="cursor-pointer text-base font-medium text-blue-500 hover:text-blue-400"
          >
            Forgot password?
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full cursor-pointer rounded-xl bg-blue-600 px-5 py-4 text-lg font-semibold transition duration-300 hover:bg-blue-700"
        >
          Create Account
        </button>

        {/* Sign Up */}
        <p className="mt-8 text-base text-gray-400">
          Don't have an account yet?{" "}
          <Link
            to="/signup"
            className="cursor-pointer font-medium text-blue-500 hover:text-blue-400"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
