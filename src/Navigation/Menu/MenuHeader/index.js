import React, { Component } from 'react';
import classnames from 'classnames';
import { required, any, number, string, object } from '../../../utils/types';

export default class MenuCounter extends Component {
  static propTypes = {
    children: required(any),
    className: string,
    style: object
  }

  static defaultProps = {
    value: 0
  }

  render() {
    const { children, className, style } = this.props;
    const classes = classnames('menu-heading', {
      [className]: className
    });

    return <span className={classes} style={style}>{children}</span>;
  }
}