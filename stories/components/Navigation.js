import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import centered from '@kadira/react-storybook-decorator-centered';
import withReadme from 'storybook-readme/with-readme';

import Menu from '../../src/Navigation/Menu';
import MenuItem from '../../src/Navigation/Menu/MenuItem';
import MenuCounter from '../../src/Navigation/Menu/MenuCounter';
import MenuHeader from '../../src/Navigation/Menu/MenuHeader';
import Octicon from '../../src/Octicon';

const readme = (load, md = require('../../src/Navigation/Menu/README.md')) => {
  return withReadme(md, load);
};

export default storiesOf('Navigation', module)
  .addDecorator(centered)

  .add('Simple menu', readme(() => (
    <Menu width={200}>
      <MenuItem selected>Account</MenuItem>
      <MenuItem>Profile</MenuItem>
      <MenuItem>Emails</MenuItem>
      <MenuItem>Notifications</MenuItem>
    </Menu>
  )))

  .add('Decorated menu', readme(() => (
    <Menu width={200}>
      <MenuItem selected>
        <Octicon name="tools" />
        Account
      </MenuItem>

      <MenuItem>
        <Octicon name="person" />
        Profile
      </MenuItem>

      <MenuItem>
        <Octicon name="mail" />
        <MenuCounter value={10} />
        Emails
      </MenuItem>

      <MenuItem counter={3} icon="radio-tower">
        Notifications
      </MenuItem>
    </Menu>
  )))

  .add('Menu with header', readme(() => (
    <Menu width={200} header="Menu heading">
      <MenuItem selected>Account</MenuItem>
      <MenuItem>Profile</MenuItem>
      <MenuItem>Emails</MenuItem>
      <MenuItem>Notifications</MenuItem>
    </Menu>
  )))

  .add('Menu with header component', readme(() => (
    <Menu width={200}>
      <MenuHeader>Menu heading</MenuHeader>
      <MenuItem selected>Account</MenuItem>
      <MenuItem>Profile</MenuItem>
      <MenuItem>Emails</MenuItem>
      <MenuItem>Notifications</MenuItem>
    </Menu>
  )))