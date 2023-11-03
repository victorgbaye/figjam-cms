import PropTypes from 'prop-types';

const Table = ({data}) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                {Object.keys(data[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
                </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
            <tr key={index}>
                {Object.values(item).map((value, idx) => (
                <td key={idx}>{value}</td>
                ))}
            </tr>
        ))}
            </tbody>
        </table>
    </div>
  )
}
Table.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    ).isRequired,
  };
export default Table