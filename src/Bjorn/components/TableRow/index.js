import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleDoubleRight } from 'react-icons/fa'

export default ({ row }) => {
  const displayRow = row.map((value) => {
    return (
      <td>{value}</td>
    )
  })
  return (
    <tr>
      {displayRow}
      <td><Link to="/bjorn/details" className="btn btn-secondary btn-sm"><FaAngleDoubleRight /> Details</Link></td>
    </tr>
  )
}
