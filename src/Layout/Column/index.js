import React, { Component } from 'react';
import classnames from 'classnames';
import { required, any, string, oneOf, object, boolean } from '../../utils/types';

export default class Column extends Component {
  static propTypes = {
    children: required(any),
    className: string,
    style: object,
    size: oneOf(['one-third', 'two-thirds', 'one-fourth', 'one-half', 'three-fourths', 'one-fifth', 'four-fifths']),
    single: boolean,
    center: boolean
  }

  render() {
    const { children, className, style, size, centered, single, md } = this.props;
    const classes = classnames({
      [className]: className,
      centered,
      ['single-column']: single,
      ['column']: !single,
      [size]: size
    });

    return <div className={classes} style={style}>{children}</div>;
  }
}

// alias
export const Col = ({ ...props }) => {
  return <Column {...props} />
};