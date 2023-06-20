import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import axios from '../../hook/axios';
import React, { useEffect, useState } from 'react';
import Signup from '../signup/Signup';
import Login from '../login/Login';

const Chatpage = () => {
    // const [api,setApi]=useState([])

  
    useEffect(()=>{
     const url ='http://localhost:5000/chat/api'
          axios.get(url)
          .then(res=>console.log(res.data))
          .catch(err=>console.log(err.message))
    },[])

    return (
        <div>
   <Tabs  variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab>sign UP</Tab>
    <Tab>Sign in</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
   <Signup/>
    </TabPanel>
    <TabPanel>
    <Login/>
    </TabPanel>
  </TabPanels>
</Tabs>
        </div>
    );
}


export default Chatpage;