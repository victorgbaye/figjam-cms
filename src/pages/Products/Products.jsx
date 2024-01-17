import styles from "./Products.module.scss";
import Product  from "../../assets/Product.svg";
import ProductBlack  from "../../assets/ProductBlack.svg";
import { useState } from 'react';
import Sidebar from "../../components/compound/sidebar/Sidebar";
import Panel from "../../components/compound/Panel/Panel";
import CategoryPanel from "./CategoryPanel";
import Table from "../../components/compound/Table/Table";

const Products = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(false)

    const showPanel = () =>{
        setIsPanelOpen(!isPanelOpen)
        console.log('checker');
    }
    const tableHeaders = ['Name', 'No of Items'];
    const tableData = [
      ['Dashboard', 26],
      ['Dashboard', 26],
      ['Dashboard', 26],
    ];
  return (
    <div className={styles.PageWrapper}>
        <Sidebar/>
        <main className={styles.contentWrapper} >
            <header className={styles.pageHeader}>
                <img src={ProductBlack}/> 
                <p>{window.location.pathname.slice(1)}Products</p>
            </header>
            <div>
                <button
                onClick={showPanel}
                className={styles.productButton}
                >
                    <img src={Product}/>
                    New category
                </button>
            </div>
            <section className={styles.tableWrapper}>
                <Table headers={tableHeaders} data={tableData}/>
            </section>
                <Panel showPanel={isPanelOpen} title="New category"
                onClose={()=>setIsPanelOpen(false)}
                >
                    <CategoryPanel/>
                </Panel>
            {/* </div> */}
        </main>

    </div>
  )
}

export default Products