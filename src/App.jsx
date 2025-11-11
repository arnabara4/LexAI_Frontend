import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/LogIn";
import Signup from "./pages/Auth/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import AnalyzePage from "./pages/Dashboard/AnalyzePage";
import EmailVerify from "./pages/EmailVerify/EmailVerify";
import VerifyReminder from "./pages/EmailVerify/VerifyReminder";
import ProtectedRoute from "./utils/ProtectedRoute";
import Layout from "./pages/Dashboard/components/Layout";
import ChatPage from "./pages/Dashboard/ChatPage";
import ProfilePage from "./pages/Dashboard/ProfilePage";

function App() {
  return (
    <>
      {/* Global Notification System */}
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

      <Routes>
        {/* --- Public Routes --- */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<EmailVerify />} />
        <Route path="/verify-reminder" element={<VerifyReminder />} />

        {/* --- Protected Dashboard Routes --- */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/analyze"
          element={
            <ProtectedRoute>
              <Layout>
                <AnalyzePage />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/chat"
          element={
            <ProtectedRoute>
              <Layout>
                <ChatPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/profile"
          element={
            <ProtectedRoute>
              <Layout>
                <ProfilePage />
              </Layout>
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

export default App;
