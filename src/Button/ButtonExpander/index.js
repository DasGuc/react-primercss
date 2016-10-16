import React, { Component } from 'react';
import classnames from 'classnames';
import { string, func, boolean } from '../../utils/types';

export default class ButtonExpander extends Component {
  static propTypes = {
    className: string,
    style: string,
    onClick: func,
    inline: boolean
  }

  render() {
    const { className, style, onClick, inline } = this.props;

    const classes = classnames('hidden-text-expander', {
      inline
    });

    const buttonClasses = classnames('ellipsis-expander', {
      [className]: className
    });

    return (
      <span className={classes}>
        <button type="button" className={buttonClasses} onClick={onClick}>&hellip;</button>
      </span>
    );
  }
}