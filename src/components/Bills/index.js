import styles from './bills.module.css';
import moment from 'moment';



export default function Bills({data}) {

  return (
    <div className={styles.yourbills}>
    <h1>Suas despesas</h1>
    <div className={styles.bills}>
    {data && data.map((bill)=> {
       return(
            <div key={bill.id} className={styles.card}>
            <ol>{moment(bill.date).format('DD/MM/YYYY')}</ol>
            <h2>{bill.name}</h2>
            <h2>{bill.value}</h2>
            
            </div>
       )
        }) }
       </div>
    </div>
  )};