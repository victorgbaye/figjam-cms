// import { useState } from 'react';
import styles from './Panel.module.scss';
import PropTypes from 'prop-types'; // Import PropTypes
import X from '../../../assets/X.svg'
import Button from '../../UI/button/Button';
const Panel = ({ title, showPanel, onClose, children, }) => {
//   const [isOpen, setIsOpen] = useState(true);

//   const togglePanel = () => {
//     setIsOpen(!isOpen);
//   };
 

  return (
    <div className={`${styles.panelContainer} ${showPanel ? styles.open : ''}`}>
    <div className={styles.panel}>
      <header className={styles.panelHeader}>
        <p>{title}</p>
        <img src={X} onClick={onClose} className={styles.closeBtn} alt="Close Button" />
      </header>
      <section>{children}</section>
      <footer className={styles.PanelAction}>
          <Button 
          style={{padding:'12px 20px', width:'auto', border:'none', outline:'none', borderRadius:'8px'}}
          label="Save"/>
          <Button 
          style={{padding:'12px 20px', background:'none', width:'auto', border:'none', outline:'none', borderRadius:'8px', color: '#222'}}
          label="Cancel"
          onClick={onClose}
          // onClick={showPanel}
          />
      </footer> 
    </div>
  </div>
  );
};

Panel.propTypes = {
    title: PropTypes.string.isRequired,
    showPanel: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

export default Panel;
