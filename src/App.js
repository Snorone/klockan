import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import ClockComponent from 'ClockComponent';


function App() {

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {

    setInterval(() => {

      setCurrentDate(new Date());

    }, 1000)

  }, [])


  return (

    <div className="app">
      <div className="background">

        <ClockComponent date={currentDate}></ClockComponent>

      </div>
    </div>
  );
}


export default App;
