import styles from './InputBox.module.css'

const  InputBox = ({displayValue})=>{
    return <input className = {styles.inputText}
     type="text" 
     value = {displayValue}
    readOnly/>
};

export default InputBox;