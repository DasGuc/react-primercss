import React, { Component } from 'react';
import classnames from 'classnames';
import { number, string, object } from '../../../utils/types';

export default class MenuCounter extends Component {
  static propTypes = {
    className: string,
    style: object,
    value: number
  }

  static defaultProps = {
    value: 0
  }

  render() {
    const { className, style, value } = this.props;
    const classes = classnames('counter', {
      [className]: className
    });

    return <span className={classes} style={style}>{value}</span>;
  }
}