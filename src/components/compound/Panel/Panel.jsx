import { useState } from 'react';
import styles from './Panel.module.scss';

const Panel = () => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.panelContainer} ${isOpen ? styles.open : ''}`}>
      <div className={styles.panel}>
        <button className={styles.closeBtn} onClick={togglePanel}>&times;</button>
        {/* Content goes here */}
        Panel Content
      </div>
      <button className={styles.openBtn} onClick={togglePanel}>
        {isOpen ? 'Close Panel' : 'Open Panel'}
      </button>
    </div>
  );
};

export default Panel;
