import { useState, useEffect } from "react"


export default function Cronometro (){
    const [segundo, setSegundo]= useState(0);
    const [minuto, setMinuto]= useState(0);
    const [hora, setHora]= useState(0);
    const [isRunning, setIsRunning] = useState(false);
      
    useEffect(() => {
      let intervalId: string | number | NodeJS.Timer | undefined;
      if (isRunning) {
        intervalId = setInterval(() => {
          setSegundo((segundo) => segundo + 1);
        }, 1000);
      }
      return () => clearInterval(intervalId);
    }, [isRunning]);
    
    const handleStartStopClick = () => {
      setIsRunning((isRunning) => !isRunning);
    };

    const handleResetClick = () => {
      setSegundo(0);
      setMinuto(0);
      setHora(0);
      setIsRunning(false);
    };

    useEffect(() => {
      if (segundo === 60) {
        setSegundo(0);
        setMinuto((minuto) => minuto + 1);
      }
      if (minuto === 60) {
        setMinuto(0);
        setHora((hora) => hora + 1);
      }
    }, [segundo, minuto]);

  return(
    <div>
      <div>{hora.toString().padStart(2, '0')}:{minuto.toString().padStart(2, '0')}:{segundo.toString().padStart(2, '0')}</div>
      <div className="button-wrapper">
        <button onClick={handleStartStopClick}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </div>
    )
}

/* Add css
.button-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
*/