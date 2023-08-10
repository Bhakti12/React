import React from 'react';
import './App.css';
import { Home } from './home/home';
import {Person} from './home/person';
import {PersonList} from './home/personList';
import {Status} from "./home/status";
import {Heading} from "./home/heading";
import {Oscar} from "./home/oscar";
import {Button} from "./home/Button";
import {Input} from "./home/input";
import {Container} from "./home/container";
//import {User} from "./home/state/user";
//import {LoggedIn} from "./home/state/loggedIn";
import {Count} from "./home/state/count";
import {UseEffect} from "./home/state/useEffect";

const personName = {
  firstName : 'Bhakti',
  lastName : 'Sanghani'
}

const nameList = [
  {
    first : 'Bhakti',
    Last : 'Sanghani'
  },
  {
    first : 'Rutvi',
    Last : 'Shah'
  },
  {
    first : 'Vrushti',
    Last : 'Shah'
  }
]

function App() {
  return (
    <div className='app'>
      <Home name='Bhakti' isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='error'/>
      <Heading>PlaceHolder</Heading>
      <Oscar>
        <Heading>Oscar goes to .. </Heading>
      </Oscar>
      <Button handleClick={(event,id) => {
        console.log("Button Clicked!",event,id)
      }}/>
      <Input value='' handleChange={(event)=>{console.log(event)}}/>
      <Container styles={{border : '1px solid red' , padding:'1rem'}}/>
      <Count/>
      <UseEffect/>
    </div>
  )
}

export default App;
