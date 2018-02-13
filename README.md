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
        'WebLists': 'react-native-web-lists',
    }
}
```

## Usage
```js
import { FlatList } from 'WebLists'; // don't import from react-native
import { SectionList } from 'WebLists'; // don't import from react-native
```

See [RN's docs](https://facebook.github.io/react-native/docs/flatlist.html).

## Examples
See the [storybook](https://react-native-web-community.github.io/react-native-web-lists/storybook).

## Contributing
PRs are welcome!
