import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import profile from './profile.jpg';

const App = () => {
  const[show, setshow] = useState(false);
  
const handleClick = () => {
  setshow(!show);
}
const [person] = useState ({
  fullName: "Saber Goob",
  bio:"Graphic desinger, web Devolopment",
  
  imgSrc: profile,
  profession:"Web Devolopment" ,
});
const [count,setcount] = useState (0);
useEffect(() => {
  const interval = setInterval(() => {
    setcount((prevCount) => prevCount + 1);
  }, 1000);
  return () => {
    clearInterval(interval);
  };
}, []);
  return (
    <div className='app'>
    <div className="btn">
      <button onClick={handleClick}>show me</button>
    </div>
    <div className="main">
      {show ? (
        <div className="info">
          <div className="img">
            <img src={person.imgSrc} alt={person.fullName} />
          </div>
          <div className="names">
            <h1> Fullname: </h1>
            <h2>{person.fullName}</h2>
          </div>
          <div className="bio">
            <h1>Bio: </h1>
            <h2>{person.bio}</h2>
          </div>
          <div className="profession">
            <h1>Profession: </h1>
            <h2>{person.profession}</h2>
          </div>
        </div>
      ) : null}
      <div className="count">
        <h1>
          {count} Seconds
        </h1>
      </div>
    </div>
    </div>
);
};

export default App;
