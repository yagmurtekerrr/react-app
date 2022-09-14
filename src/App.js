import React , {useState , useCallback} from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {

  const [showParagraph , setShowParagrah] = useState(false);
  const [allowToggle , setAllowToggle] = useState(false);

  console.log('APP RUNNİNG')

  const toggleParagraghHandler = useCallback(() => {
    if(allowToggle) {
      setShowParagrah(prevshowParagraph => !prevshowParagraph);
    }
  } , [allowToggle] );

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="App">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={allowToggleHandler} >Allow Toggling!</Button>
      <Button onClick={toggleParagraghHandler} >Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
