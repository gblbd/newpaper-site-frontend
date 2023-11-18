import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth || {}; // Ensure that auth is defined or provide default values
};

export default useAuth;
