import React from 'react';
import { connect } from 'react-redux';

import { clearNotify } from '../../store/notification/actions';
import PropTypes from 'prop-types';

export const Notification = ({ notification, clearNotify }) => {
  setTimeout(() => {
    clearNotify();
  }, notification.displayTime);

  return (
    <div className={`m-notification ${notification.hasError && '-error'}`}>
      {notification.text}
    </div>
  );
};

Notification.propTypes = {
  notification: PropTypes.object.isRequired,
  clearNotify: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  notification: state.notification,
});

const mapDispatchToProps = {
  clearNotify,
};
export default connect(mapStateToProps, mapDispatchToProps)(Notification);
