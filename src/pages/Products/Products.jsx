import styles from "./Products.module.scss";
import Product  from "../../assets/Product.svg";
import ProductBlack  from "../../assets/ProductBlack.svg";
// import X  from "../../assets/X.svg";

// import Panel from "../../components/compound/Panel/Panel";
import { useState } from 'react';
// import Input from "../../components/UI/input/Input";
// import Button from "../../components/UI/button/Button";
import Sidebar from "../../components/compound/sidebar/Sidebar";
import Panel from "../../components/compound/Panel/Panel";
import Button from "../../components/UI/button/Button";

const Products = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(false)

    const showPanel = () =>{
        setIsPanelOpen(!isPanelOpen)
        console.log('checker');
    }
  return (
    <div className={styles.PageWrapper}>
        <Sidebar/>
        <main className={styles.contentWrapper} >
            <header className={styles.pageHeader}>
                <img src={ProductBlack}/> 
                <p>{window.location.pathname.slice(1)}</p>
            </header>
            {/* <section className={styles.productFilter}>
                <p className={styles.active}>UI Elements</p>
                <p>Empty graphics</p>
            </section> */}
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
                <div className={styles.tableHeaderFlexContainer}>
                    <p>Name</p>
                    <p>No of Items</p>
                </div>
                <div className={styles.tableBodyFlexContainer}>
                    <p>
                        <span>Dashboard</span>
                        {/* <span style={{fontSize:'12px', fontWeight:400, color:'#434343'}}>Data Display</span> */}
                    </p>
                    <p>26</p>
                </div>
                <div className={styles.tableBodyFlexContainer}>
                    <p>
                        <span>Dashboard</span>
                        {/* <span style={{fontSize:'12px', fontWeight:400, color:'#434343'}}>Data Display</span> */}
                    </p>
                    <p>26</p>
                </div>
                <div className={styles.tableBodyFlexContainer}>
                    <p>
                        <span>Dashboard</span>
                        {/* <span style={{fontSize:'12px', fontWeight:400, color:'#434343'}}>Data Display</span> */}
                    </p>
                    <p>26</p>
                </div>
            </section>
            {/* panel */}
            {/* <div className={`${styles.panelContainer} ${isPanelOpen ? styles.open : ''}`}> */}
                {/* <div className={styles.panel}>
                    <header className={styles.panelHeader}>
                        <p>New Category</p>
                        <img src={X} onClick={showPanel} className={styles.closeBtn}/>
                    </header>
                    <section>
                        <Input
                        label="Name"
                        />
                    </section>
                    
                </div>
                <div className={styles.PanelAction}>
                    <Button 
                    style={{padding:'12px 20px', width:'auto', border:'none', outline:'none', borderRadius:'8px'}}
                    label="Save"/>
                    <Button 
                    style={{padding:'12px 20px', background:'none', width:'auto', border:'none', outline:'none', borderRadius:'8px', color: '#222'}}
                    label="Cancel"
                    onClick={showPanel}
                    />
                </div> */}
                <Panel showPanel={isPanelOpen} title="New category">
                    <p>Hello</p>
                </Panel>
            {/* </div> */}
        </main>

    </div>
  )
}

export default Products