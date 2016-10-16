import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import centered from '@kadira/react-storybook-decorator-centered';
import withReadme from 'storybook-readme/with-readme';
import { bgOptions } from '../options';

import Octicon from '../../src/Octicon';
import Button from '../../src/Button';
import octicons from 'octicons';

const readme = (load, md = require('../../src/Button/README.md')) => {
  return withReadme(md, load);
};

export default storiesOf('Octicons', module)
  .addDecorator(centered)
  .addDecorator(bgOptions())

  .add('All icons', readme(() => (
    <div style={{width: 500, fontSize: 50}}>
      {Object.keys(octicons.keywords).map((name, index) => {
        return <Octicon key={index} name={name} style={{padding: 5}}/>
      })}
    </div>
  )))

  .add('Big size icon', readme(() => (
    <Octicon name="mark-github" style={{fontSize: 200}}/>
  )))

  .add('Colored icon', readme(() => (
    <div>
      <Octicon name="eye" style={{fontSize: 50}} color="blue"/>&nbsp;&nbsp;
      <Octicon name="git-commit" style={{fontSize: 50}} color="green"/>&nbsp;&nbsp;&nbsp;
      <Octicon name="heart" style={{fontSize: 50}} color="red"/>
      <Octicon name="mark-github" style={{fontSize: 50}} color="orange"/>&nbsp;&nbsp;
      <Octicon name="git-pull-request" style={{fontSize: 50}} color="purple"/>
    </div>
  )))

  .add('In button', readme(() => (
    <div style={{textAlign: 'center'}}>
      <div style={{marginBottom: 10}}>
        <Button>
          <Octicon name="octoface" style={{marginRight: 5}}/>
          Button
        </Button>
      </div>

      <div style={{marginBottom: 10}}>
        <Button primary>
          <Octicon name="octoface" style={{marginRight: 5}}/>
          Button
        </Button>
      </div>

      <div style={{marginBottom: 10}}>
        <Button danger>
          <Octicon name="octoface" style={{marginRight: 5}}/>
          Button
        </Button>
      </div>

      <div style={{marginBottom: 10}}>
        <Button outline>
          <Octicon name="octoface" style={{marginRight: 5}}/>
          Button
        </Button>
      </div>

      <div>
        <Button disabled>
          <Octicon name="octoface" style={{marginRight: 5}}/>
          Button
        </Button>
      </div>
    </div>
  )))
