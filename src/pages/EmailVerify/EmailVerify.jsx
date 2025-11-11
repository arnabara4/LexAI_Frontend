import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import api from "../../utils/api";
import { motion } from "framer-motion";

export default function EmailVerify() {
  const [params] = useSearchParams();
  const [status, setStatus] = useState("verifying");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const token = params.get("token");
        const { data } = await api.get(`/verify-email?token=${token}`);
        console.log(data);
        setStatus("success");
      } catch (err) {
        setStatus("failed");
      }
    };
    verifyEmail();
  }, [params]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 text-center px-4">
      {status === "verifying" && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-lg text-gray-600">
          Verifying your email...
        </motion.p>
      )}
      {status === "success" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            ✅ Email Verified Successfully!
          </h1>
          <p className="text-gray-600 mb-6">
            Your account is now active. You can log in to continue.
          </p>
          <Link
            to="/login"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Go to Login
          </Link>
        </motion.div>
      )}
      {status === "failed" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-3xl font-bold text-red-600 mb-4">❌ Verification Failed</h1>
          <p className="text-gray-600 mb-6">
            Your verification link may be invalid or expired. Please request a new one.
          </p>
          <Link
            to="/signup"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Back to Signup
          </Link>
        </motion.div>
      )}
    </section>
  );
}
