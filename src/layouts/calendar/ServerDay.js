import React from "react";
import PropTypes from "prop-types";

function ServerDay({ date, highlightedDays }) {
  const isHighlighted = highlightedDays.some(
    (highlightedDay) => date.getTime() === highlightedDay.getTime()
  );

  return (
    <div
      style={{
        backgroundColor: isHighlighted ? "lightblue" : "white",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {date.getDate()}
    </div>
  );
}

ServerDay.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  highlightedDays: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
};

export default ServerDay;
