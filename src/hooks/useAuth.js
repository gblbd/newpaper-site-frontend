import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";

//useauth using authcontext
const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
