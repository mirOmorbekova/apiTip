import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';


function App() {

  const [advice, setTips] = useState("");

    const fetchTips = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setTips(data.slip.advice);
    };

    useEffect(() => {
    fetchTips();
    }, []);



        return (
    <div className="App">
      <div>
        <h1 className='animate-charcter'>If you need advice?</h1>
      </div>
      <div>
      <h2>Then click the button!</h2>
      </div>
      <div class="arrow-7">
    <span></span>
    <span></span>
    <span></span>
</div>
      <div>
      <button className='animate-charcter' onClick={fetchTips}>New Tip</button>
      </div>
      <div className='container'>
      <p> - {advice} - </p>
      </div>
    </div>
    );
  }


  

export default App;
