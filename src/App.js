import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';


function App() {

  const [tips, setTips] = useState("");

    const fetchTips = async () => {
    const response = await fetch("http://www.boredapi.com/api/activity/");
    const data = await response.json();
    setTips(data.activity);
    };

    useEffect(() => {
    fetchTips();
    }, []);



        return (
    <div className="App">
      <div>
        <h1 className='animate-charcter'>Don't know what to do?</h1>
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
      <p> - {tips} - </p>
      </div>
    </div>
    );
  }


  

export default App;
