import { LineChart, Line, XAxis, YAxis, Tooltip, Legend} from "recharts";
import './index.css';

const data = [
  { name: 'January',  Posts: 2400, Users: 2400 },
  { name: 'February', Posts: 1398, Users: 2210 },
  { name: 'March',  Posts: 9800, Users: 2290 },
  { name: 'April',  Posts: 3908, Users: 2000 },
  { name: 'May', Posts: 4800, Users: 2181 },
  { name: 'June',  Posts: 3800, Users: 2500 },
  { name: 'July',  Posts: 4300, Users: 2100 },
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
        <Line type="monotone" dataKey="Posts" stroke="#888523" />
             
              <Line type="monotone" dataKey="Users" stroke="#8884d8" />
              </LineChart>
    </div>
    
    </div>
  );
}
export default TrafficBar;

