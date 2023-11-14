import BarChart from "./BarChart";
import Card from "./Card";
import LineChart from "./LineChart";
import Mapwork from "./Mapwork";

const DashboardHomecomponent = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-8">
        <Card></Card>

        <LineChart></LineChart>
      </div>
      <div className="col-span-4 flex flex-col gap-8">
        <BarChart></BarChart>
        <Mapwork></Mapwork>
      </div>
    </div>
  );
};

export default DashboardHomecomponent;
