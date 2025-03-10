import React, { useState } from 'react';


const TrafficLight = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [showPurple, setShowPurple] = useState(false);

  const colors = ['red', 'yellow', 'green', ...(showPurple ? ['purple'] : [])];

  const switchColor = () => {
    const currentIndex = colors.indexOf(selectedColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setSelectedColor(colors[nextIndex]);
  };

  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        {colors.map((color) => (
          <div
            key={color}
            className={`light ${color} ${selectedColor === color ? 'active' : ''}`}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
      <div className="controls">
        <button onClick={switchColor}>Cambiar color</button>
        <button onClick={() => setShowPurple(!showPurple)}>
          {showPurple ? 'Quitar púrpura' : 'Añadir púrpura'}
        </button>
      </div>
    </div>
  );
};



export default TrafficLight;