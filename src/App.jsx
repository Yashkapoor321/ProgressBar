import { useEffect, useState } from 'react';
import ProgressBar from './Components/ProgressBar/ProgressBar'
import './App.css'


function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 0.2);
    }, 100)
  }, [])
  return (
    <div className='App'>
      <span>Progress Bar</span>
      <ProgressBar value={value}/>
    </div>
  );
}

export default App