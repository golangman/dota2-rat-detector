import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [matchId, setMatchId] = useState('');
  const [cursorStyle, setCursorStyle] = useState({});

  const handleInputChange = (e) => {
    setMatchId(e.target.value);
  };

  const handleDetectRat = () => {
    // Логика для обнаружения крысы
    console.log('Detecting rat for match ID:', matchId);
  };

  const handleSupportProject = () => {
    // Логика для поддержки проекта
    console.log('Supporting project');
  };

  const handleMouseMove = (e) => {
    setCursorStyle({
      left: `${e.clientX}px`,
      top: `${e.clientY}px`
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>Dota 2 Rat Detector</h1>
        <p>Введите ID матча Dota 2, чтобы узнать, кто использовал глиф:</p>
        <input
          type="text"
          placeholder="Введите ID матча"
          value={matchId}
          onChange={handleInputChange}
        />
        <button onClick={handleDetectRat}>Обнаружить крысу</button>
        <button onClick={handleSupportProject}>Поддержать проект</button>
        <p className="instructions">
          Вы можете найти ID матча в Dota 2, перейдя в раздел "История матчей" и выбрав нужный матч. ID будет указан в URL-адресе.
        </p>
      </div>
      <div className="background-animation"></div>
      <div className="cursor" style={cursorStyle}></div>
    </div>
  );
}

export default App;
