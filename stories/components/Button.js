import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import centered from '@kadira/react-storybook-decorator-centered';
import withReadme from 'storybook-readme/with-readme';
import { bgOptions } from '../options';

import Button from '../../src/Button';
import ButtonSocialCount from '../../src/ButtonSocialCount';
import ButtonCounter from '../../src/ButtonCounter';

const readme = (load, md = require('../../src/Button/README.md')) => {
  return withReadme(md, load);
};

export default storiesOf('Buttons', module)
  .addDecorator(centered)
  .addDecorator(bgOptions())

  .add('Default', readme(() => (
    <div style={{textAlign: 'center'}}>
      <Button onClick={action('clicked')}>Button</Button><br/><br/>
      <Button onClick={action('clicked')} tag="a">Link button</Button><br/><br/>
      <Button onClick={action('clicked')} small>Small button</Button>
    </div>
  )))

  .add('Primary', readme(() => (
    <div style={{textAlign: 'center'}}>
      <Button onClick={action('clicked')} primary>Button</Button><br/><br/>
      <Button onClick={action('clicked')} primary tag="a">Link button</Button><br/><br/>
      <Button onClick={action('clicked')} primary small>Small button</Button>
    </div>
  )))

  .add('Danger', readme(() => (
    <div style={{textAlign: 'center'}}>
      <Button onClick={action('clicked')} danger>Button</Button><br/><br/>
      <Button onClick={action('clicked')} danger tag="a">Link button</Button><br/><br/>
      <Button onClick={action('clicked')} danger small>Small button</Button>
    </div>
  )))

  .add('Outline', readme(() => (
    <div style={{textAlign: 'center'}}>
      <Button onClick={action('clicked')} outline>Button</Button><br/><br/>
      <Button onClick={action('clicked')} outline tag="a">Link button</Button><br/><br/>
      <Button onClick={action('clicked')} outline small>Small button</Button>
    </div>
  )))

  .add('Disabled', readme(() => (
    <div style={{textAlign: 'center'}}>
      <Button onClick={action('clicked')} disabled>Button</Button>&nbsp;
      <Button onClick={action('clicked')} disabled tag="a">Link button</Button>&nbsp;
      <Button onClick={action('clicked')} disabled small>Small button</Button>
      <br/><br/>
      <Button onClick={action('clicked')} disabled primary>Button</Button>&nbsp;
      <Button onClick={action('clicked')} disabled primary tag="a">Link button</Button>&nbsp;
      <Button onClick={action('clicked')} disabled primary small>Small button</Button>
      <br/><br/>
      <Button onClick={action('clicked')} disabled danger>Button</Button>&nbsp;
      <Button onClick={action('clicked')} disabled danger tag="a">Link button</Button>&nbsp;
      <Button onClick={action('clicked')} disabled danger small>Small button</Button>
      <br/><br/>
      <Button onClick={action('clicked')} disabled outline>Button</Button>&nbsp;
      <Button onClick={action('clicked')} disabled outline tag="a">Link button</Button>&nbsp;
      <Button onClick={action('clicked')} disabled outline small>Small button</Button>
    </div>
  )))

  .add('Block', readme(() => (
    <div style={{textAlign: 'center', width: 300}}>
      <Button onClick={action('clicked')} block>Button</Button><br/>
      <Button onClick={action('clicked')} block tag="a">Link button</Button><br/>
      <Button onClick={action('clicked')} block small>Small button</Button>
    </div>
  )))

  .add('With inner counts', readme(() => (
    <div style={{textAlign: 'center'}}>
      <ButtonCounter onClick={action('clicked')} value={10}>Button</ButtonCounter><br/><br/>
      <ButtonCounter onClick={action('clicked')} primary value={11}>Button</ButtonCounter><br/><br/>
      <ButtonCounter onClick={action('clicked')} danger value={12}>Button</ButtonCounter><br/><br/>
      <ButtonCounter onClick={action('clicked')} outline value={13}>Button</ButtonCounter><br/><br/>
    </div>
  )))

  .add('With counts', readme(() => (
    <div style={{textAlign: 'center'}}>
      <ButtonSocialCount onClick={action('clicked')} value={10}>Button</ButtonSocialCount><br/>
      <ButtonSocialCount onClick={action('clicked')} primary value={10}>Button</ButtonSocialCount><br/>
      <ButtonSocialCount onClick={action('clicked')} danger value={10}>Button</ButtonSocialCount><br/>
      <ButtonSocialCount onClick={action('clicked')} outline value={10}>Button</ButtonSocialCount><br/>
    </div>
  )))
