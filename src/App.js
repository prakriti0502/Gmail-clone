import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import Mail from './Mail';
import EmailList from './EmailList';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllMails, fetchMailData } from './reducers/allMailsReducer';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMailData());
  }, [dispatch]);


  const emails = useSelector(selectAllMails);

  return (
    <Router>
      <div className="App">
        {/* sidebar and header should always be present on page, thats why it is out of switch */}
        <Header/>
        <div className='app-body'>
          <Sidebar/>
          <Routes>
            <Route path='/mail' element={<Mail/>}></Route>
            <Route path='/' element={<EmailList emails={emails}/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;