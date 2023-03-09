import React from 'react'
import { Link } from 'react-router-dom'

function AnchorLink ({ referTo, pathUrl }) {
  return (
    <li>
      <Link to={pathUrl}>{referTo}</Link>
    </li>
  )
}

function AnchorButton ({ referTo, pathUrl }) {
  return (
    <Link to={pathUrl}>
      <button>{referTo}</button>
    </Link>
  )
}

function Anchor ({ referTo, pathUrl, isBtn = false }) {
  // eslint-disable-next-line multiline-ternary
  return isBtn ? (
    <AnchorButton referTo={referTo} pathUrl={pathUrl} />
  ) : (
    <AnchorLink referTo={referTo} pathUrl={pathUrl} />
  )
}

export default Anchor
