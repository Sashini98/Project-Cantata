import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
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
        // var users= record[1].lyric;
        // console.log(users);
        // console.log(record.length)
      });
  }
  useEffect(() => {
    loadCounts();
  }, []);

  // var ly= record[1].lyric;
  // console.log(users);

  const data=[];

  record.forEach((record,index)=>{
    // data = [
    //   { name: record[i].month,  Users: record[i].users, Lyrics: record[0].lyric } ];
    // data.push(record[i].month, record[].users, record[0].lyric);
    data.push( <li key={index}>{record.month}</li>)
  })

  console.log("dataaa"+data);
  // const data = [
  //   // { name: 'January',  Posts: record[0].users, Users: record[0].lyric },
  //   // { name: 'February',  Posts: record[1].users, Users: record[1].lyric }

  //   // { name: 'February', Posts: ly, Users: 2210 },
  //   { name: 'March', Covers: 9800, Users: 2290, Lyrics: 2290 },
  //   { name: 'April', Covers: 3908, Users: 2000, Lyrics: 2452 },
  //   { name: 'May', Covers: 4800, Users: 2181, Lyrics: 2289 },
  //   { name: 'June', Covers: 3800, Users: 2500, Lyrics: 2356 },
  //   { name: 'July', Covers: 4300, Users: 2100, Lyrics: 2789 },
  //   { name: 'August', Covers: 4300, Users: 2100, Lyrics: 2654 },
  //   { name: 'September', Covers: 4300, Users: 2100, Lyrics: 2741 },
  //   { name: 'October', Covers: 4300, Users: 2100, Lyrics: 22 },
  //   { name: 'November', Covers: 4300, Users: 2100, Lyrics: 2290 },
  //   { name: 'December', Covers: 4300, Users: 2100, Lyrics: 2290 },


  // ];
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
          <Line type="monotone" dataKey="Users" stroke="#888523" />
          <Line type="monotone" dataKey="Covers" stroke="#8884d8" />
          <Line type="monotone" dataKey="Lyrics" stroke="#8456d8" />

        </LineChart>
      </div>

    </div>
  );
}
export default TrafficBar;

