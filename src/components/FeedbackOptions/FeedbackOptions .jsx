import styles from "./FeedbackOptions.module.css";
// import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    const optionsArr = Object.keys(options);

    return (<div>
        {optionsArr.map(option => (<button
            type="button" key={option}
            className={styles.feedbackBtn}
            onClick={() => onLeaveFeedback(option)}
        >{option}</button>))}</div>
    )
}

// FeedbackOptions.propTypes = {
//     incrementGood: PropTypes.func.isRequired,
//     incrementNeutral: PropTypes.func.isRequired,
//     incrementBad: PropTypes.func.isRequired
// }

export default FeedbackOptions 