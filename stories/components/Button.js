import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import centered from '@kadira/react-storybook-decorator-centered';
import withReadme from 'storybook-readme/with-readme';

import Button from '../../src/Button';
import ButtonSocialCount from '../../src/Button/ButtonSocialCount';
import ButtonCounter from '../../src/Button/ButtonCounter';
import ButtonGroup from '../../src/Button/ButtonGroup';
import ButtonGroupForm from '../../src/Button/ButtonGroupForm';
import ButtonExpander from '../../src/Button/ButtonExpander';

const readme = (load, md = require('../../src/Button/README.md')) => {
  return withReadme(md, load);
};

export default storiesOf('Buttons', module)
  .addDecorator(centered)

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

  .add('Group', readme(() => (
    <div style={{textAlign: 'center'}}>
      <ButtonGroup>
        <Button onClick={action('clicked')}>Left button</Button>
        <Button onClick={action('clicked')}>Middle button</Button>
        <Button onClick={action('clicked')}>Right button</Button>
      </ButtonGroup>
      <br/><br/>
      <ButtonGroup>
        <Button onClick={action('clicked')} primary>Left button</Button>
        <Button onClick={action('clicked')} primary>Middle button</Button>
        <Button onClick={action('clicked')} primary>Right button</Button>
      </ButtonGroup>
      <br/><br/>
      <ButtonGroup>
        <Button onClick={action('clicked')} danger>Left button</Button>
        <Button onClick={action('clicked')} danger>Middle button</Button>
        <Button onClick={action('clicked')} danger>Right button</Button>
      </ButtonGroup>
      <br/><br/>
      <ButtonGroup>
        <Button onClick={action('clicked')} outline>Left button</Button>
        <Button onClick={action('clicked')} outline>Middle button</Button>
        <Button onClick={action('clicked')} outline>Right button</Button>
      </ButtonGroup>
      <br/><br/><br/>
      <ButtonGroup>
        <Button onClick={action('clicked')} small>Left button</Button>
        <Button onClick={action('clicked')} small>Middle button</Button>
        <Button onClick={action('clicked')} small>Right button</Button>
      </ButtonGroup>
      <br/><br/>
      <ButtonGroup>
        <Button onClick={action('clicked')} small disabled>Left button</Button>
        <Button onClick={action('clicked')} small disabled>Middle button</Button>
        <Button onClick={action('clicked')} small disabled>Right button</Button>
      </ButtonGroup>
    </div>
  )))

  .add('Group props', readme(() => (
    <div style={{textAlign: 'center'}}>
      <ButtonGroup primary>
        <Button onClick={action('clicked')}>Left button</Button>
        <Button onClick={action('clicked')}>Middle button</Button>
        <Button onClick={action('clicked')}>Right button</Button>
      </ButtonGroup>
      <br/><br/>
      <ButtonGroup danger>
        <Button onClick={action('clicked')}>Left button</Button>
        <Button onClick={action('clicked')}>Middle button</Button>
        <Button onClick={action('clicked')}>Right button</Button>
      </ButtonGroup>
      <br/><br/>
      <ButtonGroup outline>
        <Button onClick={action('clicked')}>Left button</Button>
        <Button onClick={action('clicked')}>Middle button</Button>
        <Button onClick={action('clicked')}>Right button</Button>
      </ButtonGroup>
      <br/><br/><br/>
      <ButtonGroup small>
        <Button onClick={action('clicked')}>Left button</Button>
        <Button onClick={action('clicked')}>Middle button</Button>
        <Button onClick={action('clicked')}>Right button</Button>
      </ButtonGroup>
      <br/><br/>
      <ButtonGroup disabled small>
        <Button onClick={action('clicked')}>Left button</Button>
        <Button onClick={action('clicked')}>Middle button</Button>
        <Button onClick={action('clicked')}>Right button</Button>
      </ButtonGroup>
    </div>
  )))

  .add('Button group form', readme(() => (
    <div style={{textAlign: 'center'}}>
      <ButtonGroup>
        <ButtonGroupForm>
          <Button onClick={action('clicked')}>Button in a form</Button>
        </ButtonGroupForm>
        <Button onClick={action('clicked')}>Button</Button>
        <Button onClick={action('clicked')}>Button</Button>
      </ButtonGroup>
    </div>
  )))

  .add('Button expander', readme(() => (
    <div style={{textAlign: 'center'}}>
      <ButtonExpander onClick={action('clicked')} /><br/>
      Inline: <ButtonExpander onClick={action('clicked')} inline/>
    </div>
  )))