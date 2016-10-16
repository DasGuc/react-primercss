import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import centered from '@kadira/react-storybook-decorator-centered';
import withReadme from 'storybook-readme/with-readme';

import Octicon from '../../src/Octicon';
import Button from '../../src/Button';
import octicons from 'octicons';

const readme = (load, md = require('../../src/Button/README.md')) => {
  return withReadme(md, load);
};

export default storiesOf('Octicons', module)
  .addDecorator(centered)

  .add('All icons', readme(() => (
    <div style={{width: 500, fontSize: 50}}>
      {Object.keys(octicons.keywords).map((name, index) => {
        return <Octicon key={index} name={name} onClick={action(name)} style={{padding: 5, cursor: 'pointer'}}/>
      })}
    </div>
  )))

  .add('Big size icon', readme(() => (
    <Octicon name="mark-github" style={{fontSize: 200}}/>
  )))

  .add('Colored icon', readme(() => (
    <div>
      <Octicon name="eye" style={{fontSize: 50, padding: 5, color: '#4078c0'}}/>
      <Octicon name="git-commit" style={{fontSize: 50, padding: 5, color: '#6cc644'}}/>
      <Octicon name="heart" style={{fontSize: 50, padding: 5, color: '#bd2c00'}}/>
      <Octicon name="mark-github" style={{fontSize: 50, padding: 5, color: '#c9510c'}}/>
      <Octicon name="git-pull-request" style={{fontSize: 50, padding: 5, color: '#6e5494'}}/>
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
