import React, { Component } from 'react';
import ReactTable from 'react-table';
import { getFriends } from '../../api/actions/friends';

import 'react-table/react-table.css';

export default class FriendsTable extends Component {
  columns = [
    {
      Header: 'Friend',
      accessor: 'last_name',
    },
    {
      Header: 'Mutual friends count',
      accessor: 'common_count',
    },
  ]

  defaultSorting = [{
    id: 'common_count',
    desc: true,
  }]

  state = {
    data: [],
  }

  componentDidMount() {
    getFriends((data) => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    return (
      <ReactTable
        columns={this.columns}
        data={data}
        sortable={true}
        filterable={true}
        defaultSorted={this.defaultSorting}
        showPagination={false}
        pageSize={data.length}
      />
    );
  }
}
