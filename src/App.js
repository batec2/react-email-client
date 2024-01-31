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
  const [currentTag, setTag] = useState('inbox');
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
   * Sets the email body to the contenents of the input
   * @param {email} input 
   */
  const handleSearch = (input) =>{
    setSearchInput(input.target.value);
  }
  
  /**
   * Sets current tag to deleted
   */
  const displayTrash = () =>{
    setTag('deleted');
  }

  /**
   * Sets the current tag to inbox
   */
  const displayInbox = () =>{
    setTag('inbox');
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
    let filtered = filterEmails(currentEmails,searchInput,currentTag)
    setFilteredEmails(filtered);
  },[currentEmails,searchInput,currentTag]);

  return (
    <div className='page-container'>
      <div className='sidebar-column'>
        <SideBar className = 'sidebar' onTrash={displayTrash} onInbox={displayInbox}></SideBar>
      </div>
      <div className='email-list-search-column'>
          <div>
            <SearchBar placeholder='Subject' handleSearch={handleSearch}></SearchBar>
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

/**
 * Filters a list of emails depending on input
 * @param {emails[]} currentEmails 
 */
function filterEmails(currentEmails,searchInput,tag){
  let filtered;
  if(searchInput===''){
    filtered = currentEmails.filter(email=>email.tag===tag);
  }
  else{
    filtered = currentEmails
      .filter((email)=>email.subject.toLowerCase().includes(searchInput.toLowerCase())
              && email.tag===tag);
  }
  return filtered;
}

export default App;
