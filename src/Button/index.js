import React, { Component } from 'react';
import classnames from 'classnames';
import { required, onlyOne, any, boolean, string, number, object, oneOf, func } from '../utils/types';

export default class Button extends Component {
  static propTypes = {
    children: required(any),
    className: string,
    style: object,
    onClick: required(func),
    primary: onlyOne(['primary', 'danger', 'outline'], boolean),
    danger: onlyOne(['primary', 'danger', 'outline'], boolean),
    outline: onlyOne(['primary', 'danger', 'outline'], boolean),
    disabled: boolean,
    small: boolean,
    block: boolean,
    tag: oneOf(['button', 'a'])
  }

  static defaultProps = {
    tag: 'button'
  }

  static contextTypes = {
    groupPrimary: onlyOne(['primary', 'danger', 'outline'], boolean),
    groupDanger: onlyOne(['primary', 'danger', 'outline'], boolean),
    groupOutline: onlyOne(['primary', 'danger', 'outline'], boolean),
    groupDisabled: boolean,
    groupSmall: boolean,
    groupTag: oneOf(['button', 'a']),
  }

  render() {
    const {
      children,
      tag,
      disabled,
      primary,
      danger,
      outline,
      small,
      block,
      style,
      className,
      onClick
    } = this.props;

    const {
      groupPrimary,
      groupDanger,
      groupOutline,
      groupSmall,
      groupDisabled,
      groupTag
    } = this.context;

    const props = { style, onClick };
    const Tag = tag || groupTag;
    const prefix = 'btn';

    const classes = classnames(prefix, {
      [`${prefix}-primary`]: primary || groupPrimary,
      [`${prefix}-danger`]: danger || groupDanger,
      [`${prefix}-outline`]: outline || groupOutline,
      [`${prefix}-sm`]: small || groupSmall,
      [`${prefix}-block`]: block,
      ['disabled']: tag === 'a' ? disabled || groupDisabled : false
    }, className);

    if (tag === 'button') {
      props.type = 'button';
      if (disabled || groupDisabled) {
        props.disabled = true;
      }
    } else {
      props.href = '#';
      props.role = 'button';
    }

    return <Tag className={classes} {...props}>{children}</Tag>;
  }
}
