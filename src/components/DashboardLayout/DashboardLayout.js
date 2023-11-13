import Navbar from "../Dashboard/Shared/Navbar";
import Sidebar from "../Dashboard/Shared/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="flex  ">
        {/* Sidebar (Fixed) */}
        <div className="h-screen bg-[#066F30]">
          <Sidebar />
        </div>

        <div className="w-full">
          <Navbar />
          <div className="">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
