import React, { Component } from 'react';
import classnames from 'classnames';
import { required, onlyOne, boolean, oneOf, string, any } from '../../utils/types';

export default class ButtonGroup extends Component {
  static propTypes = {
    children: required(any),
    className: string,
    style: string
  }

  render() {
    const { children, className, style } = this.props;
    const classes = classnames('btn-group-form', {
      [className]: className
    });

    return <div className={classes} style={style}>{children}</div>;
  }
}