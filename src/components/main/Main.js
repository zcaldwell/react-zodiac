import React from 'react'
import { zodiacs } from '../../data'
import Zodiaccard from '../zodiac/Zodiaccard'

export default function Main() {
  return (
    <main>
      {zodiacs.map((zodiac) => (
        <Zodiaccard key={zodiac.name} {...zodiac} />
      ))}
    </main>
  )
}
