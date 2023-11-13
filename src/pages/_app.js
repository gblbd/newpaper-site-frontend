// _app.js
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import "@/styles/globals.css";
import { useRouter } from "next/router";

function App({ Component, pageProps }) {
  const router = useRouter();
  const isDashboardPage = router.pathname.startsWith("/dashboard");

  return isDashboardPage ? (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  ) : (
    <Component {...pageProps} />
  );
}

export default App;
