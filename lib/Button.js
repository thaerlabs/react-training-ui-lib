import React from 'react';
import PropTypes from 'prop-types';

function Button({
  children,
  onClick
}) {
  return React.createElement("button", {
    onClick: onClick
  }, children);
}

Button.propTypes = {
  onClick: PropTypes.func
};
export default Button;