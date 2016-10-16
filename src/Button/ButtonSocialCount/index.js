import React, { Component } from 'react';
import classnames from 'classnames';
import Button from '../../Button';
import { required, onlyOne, any, boolean, string, number, object, oneOf, func } from '../../utils/types';

export default class ButtonSocialCount extends Component {
  static propTypes = {
    children: required(any),
    className: string,
    style: object,
    onClick: required(func),
    value: required(number)
  }

  render() {
    const { children, className, style, value, onClick, ...restProps } = this.props;
    const prefix = 'btn';
    const classes = classnames(`${prefix}-with-count`, {
      [className]: className
    });

    return (
      <div className="clearfix" style={style}>
        <Button {...restProps} onClick={onClick} small className={classes}>
          {children}
        </Button>
        <a className="social-count" onClick={onClick}>{value}</a>
      </div>
    );
  }
}
