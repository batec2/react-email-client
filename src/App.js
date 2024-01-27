import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  //const [getter,setter] = useState(initialstate);
  //useEffict(()=>{Do this, or a function},[triggers]);
 
  useEffect(()=>{
    const fetchEmails = async()=> {
      //Axios packaged to get all
      const response = await axios.get("https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json");
      console.log(response.data);
    };
    fetchEmails();
  },[]);//[] determines the when the useEffect is triggered, empty means trigger

  return (
    <div className="App">
    </div>
  );
}

export default App;
