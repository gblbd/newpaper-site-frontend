import Navbar from "../Dashboard/Shared/Navbar";
import Sidebar from "../Dashboard/Shared/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="flex bg-[#EFF2F5] ">
        {/* Sidebar (Fixed) */}
        <div className="">
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
