import styles from './Subscribers.module.scss'
import SubscribersIcon  from "../../assets/SubscribersIcon.svg";
// import ProductBlack  from "../../assets/ProductBlack.svg";
const Subscribers = () => {

  return (
    <div>
    <header className={styles.pageHeader}>
        <img src={SubscribersIcon}/> 
        <p>{window.location.pathname.slice(1)}</p>
    </header>
    <div>
        <button
        className={styles.productButton}
       
        >
            <img src={SubscribersIcon}/>
            Add Subscribers
        </button>
    </div>
    <section className={styles.tableWrapper}>
        <div className={styles.tableHeaderFlexContainer}>
            <p>Name & Email</p>
            <p>Subscription</p>
        </div>
        <div className={styles.tableBodyFlexContainer}>
            <p>
                <span>Dashboard</span>
                <span style={{fontSize:'12px', fontWeight:400, color:'#434343'}}>Data Display</span>
            </p>
            <p>Monthly</p>
        </div>
        <div className={styles.tableBodyFlexContainer}>
            <p>
                <span>Dashboard</span>
                <span style={{fontSize:'12px', fontWeight:400, color:'#434343'}}>Data Display</span>
            </p>
            <p>26</p>
        </div>
        <div className={styles.tableBodyFlexContainer}>
            <p>
                <span>Dashboard</span>
                <span style={{fontSize:'12px', fontWeight:400, color:'#434343'}}>Data Display</span>
            </p>
            <p>26</p>
        </div>
    </section>

</div>
  )
}

export default Subscribers