import './App.css';
import { useState } from 'react';
import Buttons from './Components/Buttons';
import Textarea from './Components/Textarea'
import TwitterPreview from './Components/TwitterPreview'
import FacebookPreview from './Components/FacebookPreview'

function App() {
  const [text, setText] = useState('')
  const [btnClicked, setBtnClicked] = useState('')

  const handleClick = (e) => {
    setBtnClicked(e.target.value)
    // console.log(btnClicked)
  }

  return(
    <div className="App">
      <h1>Preview before Upload</h1>
      <Textarea text={text} setText={setText}/>
      <Buttons handleClick={handleClick}/>
      {(btnClicked==='twitter') ? (<TwitterPreview text={text}/>) :
       (btnClicked==='facebook') ? (<FacebookPreview text={text}/>):
       (btnClicked==='all') ? (
       <>
        <TwitterPreview text={text}/>
        <FacebookPreview text={text}/>
       </>):
       (btnClicked==='reset') ? (btnClicked==='') : (btnClicked==='')}

    </div>
  )
}

export default App;
