import styles from './filter.module.css'
import {useState} from 'react';

export default function Filter({onChange}) {

const [inicialDate, setInicialDate] = useState();
const [finalDate, setFinalDate] = useState();

   return (
  <>    
  <h2> Filtrar por data</h2>
  <div className={styles.wrapper}>
    <input type="date" value={inicialDate} placeholder="DataInicial"onChange={(item)=> setInicialDate(item.target.value)}></input> 
    <input type="date" value={finalDate} placeholder="DataFinal"onChange={(item)=> setFinalDate(item.target.value)}></input> 
    <button onClick={() => onChange(inicialDate, finalDate)}>Filtrar</button>

  </div>
  </>
   )

}