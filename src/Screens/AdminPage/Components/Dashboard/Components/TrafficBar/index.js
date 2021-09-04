import { LineChart, Line, XAxis, YAxis, Tooltip, Legend} from "recharts";
import './index.css';
import React, { useState, useEffect } from "react";


function TrafficBar() {
  
const [record, setRecord] = useState([]);

const loadCounts = async () => {
    var response = fetch('http://localhost:5000/api/v1/admin/getstats')
        .then(function (response) {
            return response.json();
             })
        .then(function (myJson) {
            setRecord(myJson);
            var users= record[1].lyric;
console.log(users);
            // console.log(record.length)
        });
}
useEffect(() => {
    loadCounts();
}, []);

// var ly= record[1].lyric;
// console.log(users);

// const data;

// for(var i=0;i<record.length;i++){
const data = [
  // { name: 'January',  Posts: record[0].users, Users: record[0].lyric },
  // { name: 'February',  Posts: record[1].users, Users: record[1].lyric }

  // { name: 'February', Posts: ly, Users: 2210 },
  { name: 'March',  Posts: 9800, Users: 2290 },
  { name: 'April',  Posts: 3908, Users: 2000 },
  { name: 'May', Posts: 4800, Users: 2181 },
  { name: 'June',  Posts: 3800, Users: 2500 },
  { name: 'July',  Posts: 4300, Users: 2100 },
  { name: 'August',  Posts: 4300, Users: 2100 },
  { name: 'September',  Posts: 4300, Users: 2100 },
  { name: 'October',  Posts: 4300, Users: 2100 },
  { name: 'November',  Posts: 4300, Users: 2100 },
  { name: 'December',  Posts: 4300, Users: 2100 },


];
// }

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

