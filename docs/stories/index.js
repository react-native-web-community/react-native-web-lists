import React from 'react';
import { Text } from 'react-native';
import FlatList from 'FlatList';
import SectionList from 'SectionList';

import { storiesOf } from '@storybook/react';

storiesOf('FlatList', module).add('basic', () => (
  <FlatList data={[{ key: 'a' }, { key: 'b' }]} renderItem={({ item }) => <Text>{item.key}</Text>} />
));

storiesOf('SectionList', module).add('basic', () => (
  <SectionList
    renderItem={({ item }) => <Text>Item: {item.key}</Text>}
    renderSectionHeader={({ section }) => <Text>Header: {section.title}</Text>}
    sections={[{ data: [{ key: 'a' }, { key: 'b' }], title: 'A' }, { data: [{ key: 'c' }, { key: 'd' }], title: 'B' }]}
  />
));
