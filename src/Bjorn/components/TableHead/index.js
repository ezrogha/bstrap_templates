import React from 'react'

export default ({ row }) => {
  const displayRow = row.map((value) => {
    return (
      <th>{value}</th>
    )
  })
  return (
    <thead className="thead-dark">
      {displayRow}
      <th />
    </thead>
  )
}
