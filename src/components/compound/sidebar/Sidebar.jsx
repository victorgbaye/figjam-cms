import { SidebarData } from './SidebarData';
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
    <header className={styles.sidebarHeader}>FIG PLUG</header>
    <ul className={styles.sidebarList}>
        {
            SidebarData.map((SidebarItem)=>{
                return(
                    <>
                    <li
                        
                        className={styles.sidebarItem}
                        id={window.location.pathname === SidebarItem.link ? styles.active : "" }
                        onClick={()=>{window.location.pathname = SidebarItem.link}}
                        style={{
                            borderRight: `${window.location.pathname === SidebarItem.link ? "2px solid #" : "" }`,

                            }}
                        >
                        <div 
                        style={{
                            color:`${window.location.pathname === SidebarItem.link ? "#4040F2" : "#A8B0B9" }`, 
                            }}>
                                {SidebarItem.icon}
                        </div>
                        <div>{SidebarItem.title}</div>
                    </li>

                    </>
                )
            })
        }
    </ul>
</div>
  )
}

export default Sidebar