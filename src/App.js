import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'

function App() {

  const [ip, setIP] = useState('');

 
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
  }
  
  useEffect( () => {
  
    getData()

  }, [])

  return (
    <div className="App-header">
      <h4>Mi Ip es: {ip}</h4>
    </div>
  );
}

export default App;