import { TabView, TabPanel } from "primereact/tabview";
import ChartOne from "../../components/DashBoard/ChartOne";
import PieChartDemo from "../../components/DashBoard/PieChart";
import { Card } from "primereact/card";

export default function BasicDemo() {
  return (
    <div className="surface-ground px-4 py-5 md:px-6 lg:px-8 flex" style={{height:500}}>
      <div style={{ flex: 1, height: '100%',marginRight:10 }}>
        <Card className="shadow-1" style={{ height: '100%' }}>
          <TabView style={{ height: '100%' }}>
            <TabPanel header="Header I">
              <ChartOne />
            </TabPanel>
            <TabPanel header="Header II"></TabPanel>
            <TabPanel header="Header III"></TabPanel>
          </TabView>
        </Card>
      </div>
      <div style={{ flex: 1, height: '100%' }}>
        <Card className="shadow-1" style={{ height: '100%' }}>
          <PieChartDemo />
        </Card>
      </div>
    </div>
  );
}