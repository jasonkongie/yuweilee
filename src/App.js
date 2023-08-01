import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.location.href = 'https://youtu.be/YWetsCFFEE8';
  }, []);

  return (
    <div className="App">
      {/* empty div */}
    </div>
  );
}

export default App;
