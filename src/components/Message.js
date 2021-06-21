import React from "react";
import PropTypes from "prop-types";

export default function Message({ userName, message }) {
  return <div>{`${userName}: ${message}`}</div>;
}

Message.propTypes = {
  userName: PropTypes.string,
  message: PropTypes.string,
};
