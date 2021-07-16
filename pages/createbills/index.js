import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import api from '../api';
import Link from '../../src/components/Link'



const Product = () => {
  const [bills, setBills] = useState(true);
  const [name, setName] = useState("");
  const [value, setValue] = useState(true);
  const [date, setDate] = useState(true);
  
  


  async function AddBill() {
    await api.post('/bills', {name, value, date});
    
  }   

    return (
      <div className={styles.addingbill}>
        <h1>Cadastre uma nova despesa</h1>
          <div className={styles.form}>   
            <input name="conta" placeholder="Conta"onChange={(item)=> setName(item.target.value)} required="true"/>
            <input name="valor" placeholder="Valor" type="number"onChange={(item)=> setValue(item.target.value)} required="true"/>
            <input  type="date" placeholder="Data" onChange={(item)=> setDate(item.target.value)}required="true"/>
          <button type="submit"onClick={AddBill}>
          <Link href="/">
          Adicionar
          </Link>
          </button>
          </div> 

          
        
        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #f5f5f5;
        }
        h2{
          margin:10px
        }
        p{
          margin: 0;
          padding: 0;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      </div>
  
  
  )
  
  
}
export default Product;