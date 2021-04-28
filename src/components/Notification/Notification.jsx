import PropTypes from "prop-types";

const Notification = ({ message }) => {
    return <span >{message}</span>
}

Notification.defaultProps = {
    message: 'No feedback given'
}

Notification.propTypes = {
    message: PropTypes.string.isRequired
}

export default Notification;