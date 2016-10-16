import React, { Component } from 'react';
import classnames from 'classnames';
import { required, any, oneOf, string, object } from '../../utils/types';

export default class Container extends Component {
  static propTypes = {
    children: required(any),
    className: string,
    style: object,
    size: oneOf(['md', 'lg', 'xl'])
  }

  render() {
    const { children, className, style } = this.props;
    const classes = classnames('container', {
      [className]: className
    });

    return <div className={classes} style={style}>{children}</div>;
  }
}

// alias
export const Grid = ({ ...props }) => {
  return <Container {...props} />
};