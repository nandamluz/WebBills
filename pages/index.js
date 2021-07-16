import Header from '../src/components/Header'
import Link from '../src/components/Link'
import Bills from '../src/components/Bills'
import Filter from '../src/components/Filter'
import api from './api';
import { useEffect, useState } from 'react';

export default function Home() {
  const [bills, setBills] = useState([]);


  useEffect(() => {
    loadbills(); 
  }, []); 
  
  async function loadbills() {
    const listbills = await api.get("/bills");

    setBills(listbills.data);
    
  }
  function formatDate(dataDDMMYY) {
    return Date.parse(dataDDMMYY);
} 


  const applyFilter = (inicialDate, finalDate) => {
    if(!inicialDate && !finalDate){
      return
    }

    const newBills = bills.filter((item)=>{
      if(formatDate(inicialDate) <= formatDate(item.date) &&
        formatDate(finalDate) >= formatDate(item.date)){
        return item
      }
    })

    setBills(newBills)
   
  } 



  return (
    <div className="container">
      <Header/>   
      <Link href="/createbills">
      Adiconar despesa
      </Link>
      <Filter onChange={applyFilter}/>
      <Bills data={bills}/>

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
