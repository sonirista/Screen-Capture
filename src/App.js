import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
  const[screenshot,setScreenshot] = useState(null);
  const[capturing,setCapturing] = useState(false);

  const handleCapture=()=>{
    setCapturing(true);
    const captureTarget = document.getElementById('capture-target');
    html2canvas(captureTarget).then(canvas =>{
      const image = canvas.toDataURL();
      setScreenshot(image);
      setCapturing(false);



      const link = document.createElement('a');
      link.href = image;
      link.download = 'screenshot.png';
      document.body.appendChild(link)
      link.click()

      document.body.removeChild(link);
    })
  }
  return (
    <div className="App">
      <h2>Screen Capture</h2>
      <div id="capture-target">
        <p>hello Capture</p>
      </div>
      <button onClick={handleCapture} disabled={capturing}>
        {capturing ? 'Captureing...' : 'Capture'}
      </button>
      <div className='img'>
        <img src={screenshot}></img>
      </div>
    </div>
  );
}

export default App;
