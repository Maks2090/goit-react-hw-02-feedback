import React from "react";
import PropTypes from 'prop-types';
import css from './Statistics.module.css'

class Statistics extends React.Component {

    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;

        return (
            <>
                <ul className={css.list} >

                    <li><p className={css.text}>Good: {good}</p></li>

                    <li><p className={css.text}>Neutral: {neutral}</p></li>

                    <li><p className={css.text}>Bad: {bad}</p></li>

                    <li><p className={css.text}>Total: {total}</p></li>

                    <li><p className={css.text}>Positive feedback: {positivePercentage} %</p></li>

                </ul>




            </>
        )

    }
}


export default Statistics

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}