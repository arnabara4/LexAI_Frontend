import React from "react";
import { Link } from "react-router-dom";

export default function VerifyReminder() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 text-center px-6">
      <div className="max-w-md bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
        <div className="text-5xl mb-4">📩</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Verify Your Email
        </h1>
        <p className="text-gray-600 mb-6">
          We’ve sent a verification link to your registered email address.
          Please verify your email before accessing LexAI.
        </p>
        <Link
          to="/login"
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Go Back to Login
        </Link>
      </div>
    </section>
  );
}
