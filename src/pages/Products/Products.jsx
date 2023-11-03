import styles from "./Products.module.scss";
import Product  from "../../assets/Product.svg";
import ProductBlack  from "../../assets/ProductBlack.svg";

const Products = () => {
  return (
    <div>
        <header className={styles.pageHeader}>
            <img src={ProductBlack}/> 
            <p>{window.location.pathname.slice(1)}</p>
        </header>
        <section className={styles.productFilter}>
            <p className={styles.active}>UI Elements</p>
            <p>Empty graphics</p>
        </section>
        <div>
            <button
            className={styles.productButton}
            >
                <img src={Product}/>
                New Product
            </button>
        </div>
        <section className={styles.tableWrapper}>
            <div className={styles.tableHeaderFlexContainer}>
                <p>Name & Description</p>
                <p>No of Items</p>
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

export default Products