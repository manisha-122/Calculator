import styles from './Buttons.module.css'

const Buttons = ({onButtonClick})=>{
    let buttonList = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
    return(
        <div className={styles.buttonContainer}>
            {buttonList.map(item=><button className={styles.button}
            key={item}
            onClick ={()=>{onButtonClick(item)}}
            >{item}</button>)}    
        </div>
    )
};

export default Buttons;