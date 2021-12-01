import React from 'react'
import { zodiacs } from '../../data.js'
import Zodiaccard from '../zodiac/Zodiaccard'
import background from '../../background.jpg'
import './Main.css'

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiacs.map((zodiac) => (
        <Zodiaccard key={zodiac.name} {...zodiac} />
      ))}
    </main>
  )
}
