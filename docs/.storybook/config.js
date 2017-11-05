import { setOptions } from '@storybook/addon-options';
import { configure } from '@storybook/react';

setOptions({
  name: 'Lists',
  url: 'https://react-native-web-community.github.io/react-native-web-lists',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  downPanelInRight: false
});

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
