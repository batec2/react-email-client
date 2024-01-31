//ts-check
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
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [searchInput, setSearchInput] = useState('')
  /**
   * Sets current selected email to email of given id
   * @param {number} id email id 
   */
  const displayEmail = (id) =>{
    const email = filteredEmails.find(email=>email.id===id);
    email.read = 'true';
    setSelectedEmail(email);
  };

  /**
   * 
   * @param {*} input 
   */
  const handleSearch = input =>{
    setSearchInput(input.target.value);
  }
  
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

  /**
   * Filters emails depending on the user input
   */
  useEffect(()=>{
    let filtered;
    if(searchInput===''){
      filtered = currentEmails;
    }
    else{
      filtered = currentEmails
        .filter((email)=>email.from.toLowerCase().includes(searchInput)
                || email.address.toLowerCase().includes(searchInput));
    }
    setFilteredEmails(filtered);
  },[currentEmails,searchInput])

  return (
    <div className='page-container'>
      <div className='sidebar-column'>
        <SideBar className = 'sidebar'></SideBar>
      </div>
      <div className='email-list-search-column'>
          <div>
            <SearchBar placeholder='Sender' handleSearch={handleSearch}></SearchBar>
          </div>
          <div className='email-list-container'>
            <EmailList emails = {filteredEmails} onClick={displayEmail}></EmailList>
          </div>
      </div>
      <div className='body-column'>
        <EmailBody className='emailbody' email={selectedEmail}></EmailBody>
      </div>
    </div>
  );
}

export default App;
