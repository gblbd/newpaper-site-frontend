// PrivateRoute.js
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }

  // If user is not authenticated, redirect to login page
  if (!user) {
    router.push("/signin");
    return null; // You can return a loading state here if needed
  }

  // If user is authenticated, render the children components
  return <>{children}</>;
};

export default PrivateRoute;
