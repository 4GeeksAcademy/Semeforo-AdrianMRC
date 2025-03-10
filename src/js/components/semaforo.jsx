import React, { useState } from 'react';


const TrafficLight = () => {
  const [color, setColor] = useState("red");

  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        <div 
          className={`light red ${color === 'red' ? 'active' : ''}`}
          onClick={() => setColor('red')}
        ></div>
        <div 
          className={`light yellow ${color === 'yellow' ? 'active' : ''}`}
          onClick={() => setColor('yellow')}
        ></div>
        <div 
          className={`light green ${color === 'green' ? 'active' : ''}`}
          onClick={() => setColor('green')}
        ></div>
      </div>
    </div>
  );
};


export default TrafficLight;