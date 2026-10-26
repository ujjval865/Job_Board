import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear old errors

    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    // form validation

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    setEmailError("");

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      return;
    }

    if (confirmPassword === password) {
      setConfirmPasswordError("Please enter valid password");
    }

    setPasswordError("");

    setIsLoggedIn(true);

    // user Data

    const userData = {
      email: email.trim(),
      password: password.trim(),
    };

    // Save user data

    localStorage.setItem("userData", JSON.stringify(userData));

    // User is NOT logged in yet
    localStorage.setItem("isLoggedIn", "false");

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#111827] px-4 text-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl rounded-xl border border-gray-700 bg-[#1f2937] p-8 sm:p-12 md:p-16"
      >
        {/* Heading */}
        <h1 className="mb-10 text-3xl font-bold sm:text-4xl">
          Sign up to your account
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

        {/* Confirm Password */}

        <div className="mb-5">
          <label
            htmlFor="password"
            className="mb-3 block text-lg font-semibold"
          >
            Confirm password
          </label>

          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full rounded-xl border border-gray-600 bg-[#374151] px-4 py-4 text-lg text-white outline-none placeholder:text-gray-400 focus:border-blue-500"
          />

          {confirmPasswordError && (
            <p className="mt-2 text-sm text-red-400">{confirmPasswordError}</p>
          )}
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
          Already have an account yet?{" "}
          <Link
            to="/login"
            className="cursor-pointer font-medium text-blue-500 hover:text-blue-400"
          >
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
