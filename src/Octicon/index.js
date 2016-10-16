import React, { Component } from 'react';
import classnames from 'classnames';
import octicons from 'octicons';

import { required, func, string, object, oneOf } from '../utils/types';
import { colors } from '../utils/colors';

export default class Octicon extends Component {
  static propTypes = {
    className: string,
    style: object,
    color: oneOf(Object.keys(colors)),
    onClick: func,
    name: required(oneOf(Object.keys(octicons.keywords)))
  }

  render() {
    const { className, name, color, style, restProps } = this.props;
    const prefix = 'octicon';
    const classes = classnames(prefix, `${prefix}-${name}`, {
      className
    });

    const renderStyle = {}
    if (typeof colors[color] !== 'undefined') {
      renderStyle.color = colors[color];
    }

    return <span className={classes} style={{...renderStyle, ...style}} {...restProps} />
  }
}