import React from 'react'

type Props = {}

const Mode = (props: Props) => {
  return (
    <label className="switch">
    <input type="checkbox" />
    <span className="slider round"></span>
    </label>
  )
}

export default Mode