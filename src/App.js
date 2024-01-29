import './App.css';
import EmailList from './components/emailList/emailList.component';
import SearchBar from './components/searchbar/searchbar.component';
import SideBar from './components/sidebar/sizebar.component';
import EmailBody from './components/emailBody/emailBody.component';
import { useState, useEffect } from 'react';
import axios from 'axios';



function App() {
  //const [getter,setter] = useState(initialstate);
  //useEffict(()=>{Do this, or a function},[triggers]);
  const [currentEmails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState({});
  
  const displayEmail = (id) =>{
    setSelectedEmail(currentEmails.find(email=> email.id===id));
  };

  /**
   * Fetches information from online and places into an array of JSON objects
   */
  useEffect(()=>{
    const fetchEmails = async()=> {
      //Axios packaged to get all
      const response = await axios.get("https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json");
      console.log(response.data);
      setEmails(response.data);
    };
    fetchEmails();
  },[]);//[] determines the when the useEffect is triggered, empty means trigger

  return (
    <div className='page-container'>
    <SideBar className = 'sidebar'></SideBar>
    <div className='email-list-search-container'>
        <SearchBar></SearchBar>
        <EmailList emails = {currentEmails} onClick={displayEmail}></EmailList>
    </div>
    <EmailBody className='emailbody' email={selectedEmail}></EmailBody>
</div>
  );
}

export default App;
