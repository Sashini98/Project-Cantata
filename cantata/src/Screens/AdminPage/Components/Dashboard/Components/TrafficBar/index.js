import { LineChart, Line, XAxis, YAxis, Tooltip, Legend} from "recharts";
import './index.css';

const data = [
  { name: 'January',  Traffic: 2400, amt: 2400 },
  { name: 'February', Traffic: 1398, amt: 2210 },
  { name: 'March',  Traffic: 9800, amt: 2290 },
  { name: 'April',  Traffic: 3908, amt: 2000 },
  { name: 'May', Traffic: 4800, amt: 2181 },
  { name: 'June',  Traffic: 3800, amt: 2500 },
  { name: 'July',  Traffic: 4300, amt: 2100 },
];
function TrafficBar() {
  return (
    <div className="mybox  is-centered">
      <h1 className="title is-3">Site Traffic</h1><br></br><br></br>
    <div className="App">
      <LineChart width={800} height={400} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Traffic" stroke="#8884d8" />
              </LineChart>
    </div>
    </div>
  );
}
export default TrafficBar;

