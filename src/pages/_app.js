// _app.js
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import AuthProvider from "@/context/AuthProvider";
import PrivateRoute from "@/routes/PrivateRoute";
import "@/styles/globals.css";
import { useRouter } from "next/router";

function App({ Component, pageProps }) {
  const router = useRouter();
  const isDashboardPage = router.pathname.startsWith("/dashboard");

  return isDashboardPage ? (
    <DashboardLayout>
      <AuthProvider>
        <PrivateRoute>
          <Component {...pageProps} />
        </PrivateRoute>
      </AuthProvider>
    </DashboardLayout>
  ) : (
    <Component {...pageProps} />
  );
}

export default App;
