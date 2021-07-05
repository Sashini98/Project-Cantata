import { LineChart, Line, XAxis, YAxis, Tooltip, Legend} from "recharts";
const data = [
  { name: 'January',  pv: 2400, amt: 2400 },
  { name: 'February', pv: 1398, amt: 2210 },
  { name: 'March',  pv: 9800, amt: 2290 },
  { name: 'April',  pv: 3908, amt: 2000 },
  { name: 'May', pv: 4800, amt: 2181 },
  { name: 'June',  pv: 3800, amt: 2500 },
  { name: 'July',  pv: 4300, amt: 2100 },
];
function TrafficBar() {
  return (
    <div className="App">
      <LineChart width={800} height={400} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              </LineChart>
    </div>
  );
}
export default TrafficBar;

