import cookie from "js-cookie";

// set in cookie
export const setCookie = (key, value) => {
  if (typeof window !== "undefined") {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};
// remove from cookie
export const removeCookie = (key) => {
  if (typeof window !== "undefined") {
    cookie.remove(key, {
      expires: 1,
    });
  }
};
// get from cookie such as stored token
// will be useful when we need to make request to server with token
export const getCookie = (key) => {
  if (typeof window !== "undefined") {
    return cookie.get(key);
  }
};
// set in localstorage
export const setLocalStorage = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
// set in localstorage
export const getLocalStorage = (key) => {
  console.log("key", key);
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem(key));
  }
};
// remove from localstorage
export const removeLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};
// authenticate user by passing data to cookie and localstorage during signin
// Example authenticate function
export const authenticate = (response, callback) => {
  // Save token to localStorage
  setLocalStorage("token", response.token);
  setCookie("token", response.token);
  // Save user details to localStorage
  setLocalStorage("user", response.user);

  // Execute callback if provided
  if (callback && typeof callback === "function") {
    callback();
  }
};

// access user info from localstorage
// helper.js
// helper.js

export const isAuth = () => {
  if (typeof window === "undefined") {
    return false; // Return false for server-side rendering
  }

  const token = getCookie("token");

  if (token) {
    const userFromLocalStorage = localStorage.getItem("user");

    if (userFromLocalStorage && userFromLocalStorage !== "undefined") {
      return JSON.parse(userFromLocalStorage);
    }
  }

  return false;
};

export const signout = (next) => {
  removeCookie("token");
  removeLocalStorage("user");
  next();
};

export const updateUser = (response, next) => {
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("user"));
    auth = response;

    localStorage.setItem("user", JSON.stringify(auth));
  }
  next();
};
