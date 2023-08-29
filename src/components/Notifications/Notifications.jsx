import PropTypes from 'prop-types';
import css from './Notifications.module.css';

const Notifications = ({ message }) => <p className={css.message}>{message}</p>;

export default Notifications;

Notifications.propTypes = {
  message: PropTypes.string.isRequired,
};
