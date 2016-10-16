import React from 'react';
import { setOptions } from '@kadira/storybook-addon-options';

// import dependencies
import 'primer-css/build/build.css';
import 'octicons/build/font/octicons.css';

// import stories
import './components/Button';
import './components/Octicon';

setOptions({
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
});