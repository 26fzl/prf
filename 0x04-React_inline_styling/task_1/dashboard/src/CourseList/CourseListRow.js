import React from "react";
import PropTypes from "prop-types";

const headerRowStyle = { backgroundColor: "#deb5b545" };
const normalRowStyle = { backgroundColor: "#f5f5f5ab" };

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr style={normalRowStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th style={headerRowStyle} colSpan={2}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th style={headerRowStyle}>{textFirstCell}</th>
            <th style={headerRowStyle}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
