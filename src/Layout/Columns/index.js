import React, { Component } from 'react';
import classnames from 'classnames';
import { required, any, string, object } from '../../utils/types';

export default class Columns extends Component {
  static propTypes = {
    children: required(any),
    className: string,
    style: object
  }

  render() {
    const { children, className, style } = this.props;
    const classes = classnames('columns', {
      [className]: className
    });

    return <div className={classes} style={style}>{children}</div>;
  }
}

// alias
export const Cols = ({ ...props }) => {
  return <Columns {...props} />
};