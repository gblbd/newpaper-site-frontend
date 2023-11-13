// _app.js
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
  // Check if the current page is a dashboard page
  const isDashboardPage = Component.name === "Dashboard";

  return isDashboardPage ? (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  ) : (
    <Component {...pageProps} />
  );
}

export default App;
