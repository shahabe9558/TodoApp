import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { apiConnector } from './services/apiConnector';
import { testing } from './services/api';
import axios, { Axios } from 'axios';

function App() {
  const[data, setData] = useState([{},{}]);
  console.log("data is ", data);

  const fetchData = async()=>{
        let result = await apiConnector('GET', testing.API_TEST);
        setData(result.data.data)
  }
  useEffect(()=> {
     fetchData();
  },[]);
  return (
    <div>
      {data[0].title}
    </div>
  );
}

export default App;
