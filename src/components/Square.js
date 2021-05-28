import React from 'react'

export default function Square(props) {
  return (
    <button className="sqSquare" onClick={props.onClick}>
      {props.value}
    </button>
  )
}
