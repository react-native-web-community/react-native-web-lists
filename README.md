# react-native-web-lists
> React Native for Web implementation of Lists

This package uses the legacy implementation (ListView).

## Getting started
`$ npm install react-native-web-lists --save`

Alias the package in your webpack config:

```
resolve: {
    alias: {
        'react-native': 'react-native-web',
        ...
        'FlatList': 'react-native-web-lists/src/FlatList',
        'SectionList': 'react-native-web-lists/src/SectionList',
    }
}
```

## Usage
```js
import FlatList from 'FlatList'; // don't import from react-native
import SectionList from 'SectionList'; // don't import from react-native
```

See [RN's docs](https://facebook.github.io/react-native/docs/flatlist.html).

## Examples
See the [storybook](https://react-native-web-community.github.io/react-native-web-lists/storybook).

## Contributing
PRs are welcome!
