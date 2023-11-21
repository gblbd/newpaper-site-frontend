// _app.js
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import AuthProvider from "@/context/AuthProvider";
import PrivateRoute from "@/routes/PrivateRoute";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App({ Component, pageProps }) {
  const router = useRouter();
  const isDashboardPage = router.pathname.startsWith("/dashboard");

  return isDashboardPage ? (
    <AuthProvider>
      <PrivateRoute>
        <DashboardLayout>
          <ToastContainer />
          <Component {...pageProps} />
        </DashboardLayout>
      </PrivateRoute>
    </AuthProvider>
  ) : (
    <Component {...pageProps} />
  );
}

export default App;
