import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// ProtectedRoute checks if user is authenticated before allowing access to a route
// If not authenticated, it redirects to the login page
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  // If user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the route normally
  return children;
}

export default ProtectedRoute;
