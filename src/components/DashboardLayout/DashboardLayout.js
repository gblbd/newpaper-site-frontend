import Navbar from "../Dashboard/Shared/Navbar";
import Sidebar from "../Dashboard/Shared/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Sidebar />
    </>
  );
};

export default DashboardLayout;
