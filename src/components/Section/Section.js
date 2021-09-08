import React from "react";
import PropTypes from 'prop-types';
import css from './Section.module.css'

class Section extends React.Component {

    render() {

        const { title, children } = this.props

        return (
            <section>
                <h2 className={css.title}>{title}</h2>
                {children}
            </section>
        )
    }
}

export default Section

Section.propTypes = {
    title: PropTypes.string.isRequired,
}