// routes/PrivateRoute.js
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If user is not authenticated, redirect to login page
    if (!isLoading && !user) {
      router.push("/signin");
    }
  }, [isLoading, user, router]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }

  // If user is authenticated, render the children components
  return <>{children}</>;
};

export default PrivateRoute;
