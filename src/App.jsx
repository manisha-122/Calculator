import styles from './App.module.css'
import InputBox from "./InputBox"
import Buttons from "./Buttons"
import { useState } from 'react'
function App() {

  const [calValue, setCalValue] = useState("");

  const onButtonClick = (item)=>{
    if(item === 'C'){
      setCalValue("");
    }
    else if( item === '='){
     let result = eval(calValue);
     setCalValue(result);
    }
    else{
      const display = calValue+item;
      setCalValue(display)
    }
  }

  return (
    <div className={styles.container}>
      <InputBox displayValue = {calValue}></InputBox>
      <Buttons onButtonClick = {onButtonClick}></Buttons>
    </div>
  )
}

export default App
