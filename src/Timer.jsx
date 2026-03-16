import { useEffect, useState } from 'react';

function Timer() {
  const [secondes, setSecondes] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSecondes((value) => value + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="demo-block">
      <p className="result-text">Temps ecoule : {secondes} secondes</p>
    </div>
  );
}

export default Timer;
