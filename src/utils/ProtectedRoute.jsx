import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // 1. We just import the hook
import Loader from '../shared/Loader'; 

export default function ProtectedRoute({ children }) {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return <Loader text="Validating your session..." />;
  }

  // 4. The hook is done. Is there a user?
  if (!user) {
    // No user. Redirect to login.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  // 5. There IS a user. Is their email verified?
  //    (We know this is correct because we fixed the backend token)
  if (!user.is_email_verified) {
    // User is logged in, but not verified.
    // Send them to a "please check your email" page.
    return <Navigate to="/verify-reminder" replace />;
  }

  // 6. User is logged in AND verified.
  //    Show the protected page.
  return children;
}