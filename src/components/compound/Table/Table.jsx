import PropTypes from 'prop-types';
import styles from "./Table.module.scss";

const Table = ({ headers, data }) => {
  return (
    <div>
        <section className={styles.tableWrapper}>
                <div className={styles.tableHeaderFlexContainer}>
                    {headers.map((header, index) => (
            <p key={index}>{header}</p>
          ))}
                </div>
                {data.map((rowData, rowIndex) => (
          <div key={rowIndex} className={styles.tableBodyFlexContainer}>
            {rowData.map((cellData, cellIndex) => (
              <p key={cellIndex}>{cellData}</p>
            ))}
          </div>
        ))}
            </section>
    </div>
  )
}
Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)).isRequired,
};
export default Table