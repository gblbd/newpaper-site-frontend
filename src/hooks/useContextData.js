import { isAuth } from "@/utilities/helper";
import { useState } from "react";

const useContextData = () => {
  const [user, setUser] = useState(isAuth());
  const [isLoading, setIsLoading] = useState(false);

  const [authError, setAuthError] = useState("");
  const [authSuccess, setAuthSuccess] = useState("");

  const [token, setToken] = useState("");

  return {
    user,
    setUser,
    token,
    setToken,
    isLoading,
    setIsLoading,
    authError,
    setAuthError,
    authSuccess,
    setAuthSuccess,
  };
};

export default useContextData;
