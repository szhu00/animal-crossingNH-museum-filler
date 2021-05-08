import React, { useState,useEffect } from 'react';
import MainPage from './MainPage.js';
import StartPage from './startPage.js';
import {Api} from './getCreatures.js';
import fire from'./Firebase.js';

function App() {

  
  const [user, setUser] = useState('');
  const [fish, setFish] = useState([]);
  const [bugs, setBugs] = useState([]);
  const [seaCreatures, setSeaCreatures] = useState([]);
    let uid = user.uid;
    const getCreatures = async () => {
    
    const fishData = await Api.get("fish").catch((err) => console.log("err ",err));
        if(fishData && fishData.data) {
            setFish(fishData.data);
        }
    const bugData = await Api.get('bugs').catch((err) => console.log("err ", err));
        if(bugData && bugData.data) {
          setBugs(bugData.data);
        }
    const seaCreaturesData = await Api.get("sea").catch((err) => console.log("err ", err));
    if(seaCreaturesData &&seaCreaturesData.data) {
      setSeaCreatures(seaCreaturesData.data);
    }
    
    }
  

    useEffect(() => {
       getCreatures();
    }, [])

  return (
    <>
      { user ? (<MainPage fish = {fish} bugs = {bugs} seaCreatures = {seaCreatures} uid ={uid}/>) : (<StartPage setUser={setUser} uid = {uid}/>)}
      <footer>
      <div class="content has-text-centered">
        <p className="footerContent">
           &#169; Moonbay Island Representive 🌙 Connect With Me in ANCH at Dream Adress: DA-5891-6905-3547-- Made with a lot of &#9749; for Comp 426 &#128564;
        </p>
        </div>
      </footer>
    </>
  );

};



export default App;
