import React from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'

const Table = ({ columns, sortColumn, onSort, data }) => {
    return (
      <table className="table">
        <TableHead columns={columns} sortColumn={sortColumn} onSort={onSort} />
        <TableBody columns={columns} data={data} />
      </table>
    );
  };
  

export default Table;
