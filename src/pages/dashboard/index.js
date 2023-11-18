import DashboardHomecomponent from "@/components/Dashboard/DashboardHomeComponent/DashboardHomecomponent";
import PrivateRoute from "@/routes/PrivateRoute";

const Dashboard = () => {
  return (
    <div>
      <PrivateRoute>
        <DashboardHomecomponent></DashboardHomecomponent>
      </PrivateRoute>
    </div>
  );
};

export default Dashboard;
