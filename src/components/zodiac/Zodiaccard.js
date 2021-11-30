import React from 'react'
import './Zodiaccard.css'

export default function Zodiaccard(props) {
  return (
    <>
      <div className="zodiac">
        <img alt={props.name} src={`${process.env.PUBLIC_URL}/${props.name}.png`} />
        <p className="name"> {props.name} </p>
        <p className="date"> {props.dates} </p>
      </div>
    </>
  )
}
