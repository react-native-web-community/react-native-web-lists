import React, { PureComponent } from 'react';
import MetroListView from './MetroListView';

export default class FlatList extends PureComponent {
  render() {
    return <MetroListView {...this.props} items={this.props.data} />;
  }
}
