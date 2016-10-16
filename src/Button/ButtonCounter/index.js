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
    const { children, className, style, value, onClick } = this.props;
    const prefix = 'btn';
    const classes = classnames({
      [className]: className
    });

    return (
      <Button className={classes} {...this.props}>
        {children}&nbsp;
        <span className="counter">{value}</span>
      </Button>
    );
  }
}
