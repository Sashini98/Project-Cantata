import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import './index.css';
import React, { useState, useEffect } from "react";
import axios from "axios";



function TrafficBar() {

  const [recorduser, setRecorduser] = useState([]);
  const [recordcover, setRecordcover] = useState([]);
  const [recordlyric, setRecordlyric] = useState([]);


  useEffect(() => {
    loaduserCounts();
    loadcoverCounts();
    loadlyricCounts();
  }, []);

  const loaduserCounts = async () => {
    // var response = fetch('http://localhost:5000/api/v1/admin/getuserStats')
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (myJson) {
    //     setRecorduser(myJson);

    //   });

    axios.get("http://localhost:5000/api/v1/admin/getuserStats").then(response => {
      console.log(response.data)
      setRecorduser(response.data)
    }).catch(err => {
      console.log(err)
    })


  }

  const loadcoverCounts = async () => {
    // var response = fetch('http://localhost:5000/api/v1/admin/getcoverStats')
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (myJson) {
    //     setRecordcover(myJson);

    //   });
    axios.get("http://localhost:5000/api/v1/admin/getcoverStats").then(response => {
      console.log(response.data)
      setRecordcover(response.data)
    }).catch(err => {
      console.log(err)
    })


  }

  const loadlyricCounts = async () => {
    // var response = fetch('http://localhost:5000/api/v1/admin/getlyricStats')
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (myJson) {
    //     setRecordlyric(myJson);

    //   });
    axios.get("http://localhost:5000/api/v1/admin/getlyricStats").then(response => {
      console.log(response.data)
      setRecordlyric(response.data)
    }).catch(err => {
      console.log(err)
    })


  }


  const data = [
    { name: 'January', Covers: recordcover.length >0? recordcover[0].covercnt :0, Users: recorduser.length>0? recorduser[0].usercnt : 0, Lyrics: recordlyric.length>0? recordlyric[0].lyriccnt : 0},
    { name: 'February', Covers: recordcover.length >0? recordcover[1].covercnt :0, Users: recorduser.length>0? recorduser[1].usercnt : 0, Lyrics: recordlyric.length>0? recordlyric[1].lyriccnt : 0},
    { name: 'March', Covers: recordcover.length >0? recordcover[2].covercnt :0, Users: recorduser.length>0? recorduser[2].usercnt : 0, Lyrics: recordlyric.length>0? recordlyric[2].lyriccnt : 0},
    { name: 'April', Covers: recordcover.length >0? recordcover[3].covercnt :0, Users: recorduser.length>0? recorduser[3].usercnt : 0, Lyrics: recordlyric.length>0? recordlyric[3].lyriccnt : 0},
    { name: 'May', Covers: recordcover.length >0? recordcover[4].covercnt :0, Users: recorduser.length>0? recorduser[4].usercnt : 0, Lyrics: recordlyric.length>0? recordlyric[4].lyriccnt : 0},
    { name: 'June', Covers: recordcover.length >0? recordcover[5].covercnt :0, Users: recorduser.length>0? recorduser[5].usercnt : 0, Lyrics: recordlyric.length>0? recordlyric[5].lyriccnt : 0},
    { name: 'July', Covers: recordcover.length >0? recordcover[6].covercnt :0, Users: recorduser.length>0? recorduser[6].usercnt : 0, Lyrics: recordlyric.length>0? recordlyric[6].lyriccnt : 0},
    { name: 'August', Covers: recordcover.length >0? recordcover[7].covercnt :0, Users: recorduser.length>0? recorduser[7].usercnt : 0, Lyrics: recordlyric.length>0? recordlyric[7].lyriccnt : 0},
    { name: 'September', Covers: recordcover.length >0? recordcover[8].covercnt :0, Users: recorduser.length>0? recorduser[8].usercnt : 0, Lyrics: recordlyric.length>0? recordlyric[8].lyriccnt : 0},
    { name: 'October', Covers: recordcover.length >0? recordcover[9].covercnt :0, Users: recorduser.length>0? recorduser[9].usercnt : 0, Lyrics: recordlyric.length>0? recordlyric[9].lyriccnt : 0},
    { name: 'November', Covers: recordcover.length >0? recordcover[10].covercnt :0, Users: recorduser.length>0? recorduser[10].usercnt : 0, Lyrics: recordlyric.length>0? recordlyric[10].lyriccnt : 0},
    { name: 'December', Covers: recordcover.length >0? recordcover[11].covercnt :0, Users: recorduser.length>0? recorduser[11].usercnt : 0, Lyrics: recordlyric.length>0? recordlyric[11].lyriccnt : 0},
    // { name: 'February', Covers: recordcover || recordcover[1].covercnt, Users: recorduser || recorduser[1].usercnt, Lyrics: recordlyric || recordlyric[1].lyriccnt },
    // { name: 'March', Covers: recordcover || recordcover[2].covercnt, Users: recorduser || recorduser[2].usercnt, Lyrics: recordlyric || recordlyric[2].lyriccnt },
    // { name: 'April', Covers: recordcover || recordcover[3].covercnt, Users: recorduser || recorduser[3].usercnt, Lyrics: recordlyric || recordlyric[3].lyriccnt },
    // { name: 'May', Covers: recordcover || recordcover[4].covercnt, Users: recorduser || recorduser[4].usercnt, Lyrics: recordlyric || recordlyric[4].lyriccnt },
    // { name: 'June', Covers: recordcover || recordcover[5].covercnt, Users: recorduser || recorduser[5].usercnt, Lyrics: recordlyric || recordlyric[5].lyriccnt },
    // { name: 'July', Covers: recordcover || recordcover[6].covercnt, Users: recorduser || recorduser[6].usercnt, Lyrics: recordlyric || recordlyric[6].lyriccnt },
    // { name: 'August', Covers: recordcover || recordcover[7].covercnt, Users: recorduser || recorduser[7].usercnt, Lyrics: recordlyric || recordlyric[7].lyriccnt },
    // { name: 'September', Covers: recordcover || recordcover[8].covercnt, Users: recorduser || recorduser[8].usercnt, Lyrics: recordlyric || recordlyric[8].lyriccnt },
    // { name: 'October', Covers: recordcover || recordcover[9].covercnt, Users: recorduser || recorduser[9].usercnt, Lyrics: recordlyric || recordlyric[9].lyriccnt },
    // { name: 'November', Covers: recordcover || recordcover[10].covercnt, Users: recorduser || recorduser[10].usercnt, Lyrics: recordlyric || recordlyric[10].lyriccnt },
    // { name: 'December', Covers: recordcover || recordcover[11].covercnt, Users: recorduser || recorduser[11].usercnt, Lyrics: recordlyric || recordlyric[11].lyriccnt }

  ];


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

