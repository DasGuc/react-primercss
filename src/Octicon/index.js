import React, { Component } from 'react';
import classnames from 'classnames';
import octicons from 'octicons';

import { required, func, string, object, oneOf } from '../utils/types';

export default class Octicon extends Component {
  static propTypes = {
    className: string,
    style: object,
    onClick: func,
    name: required(oneOf(Object.keys(octicons.keywords)))
  }

  render() {
    const { className, name, color, ...restProps } = this.props;
    const prefix = 'octicon';
    const classes = classnames(prefix, `${prefix}-${name}`, {
      [className]: className
    });

    return <span className={classes} {...restProps} />
  }
}