import React from 'react'
import './FloatingHearts.css'

export default function FloatingHearts(){
  return (
    <div className="hearts">
      {Array.from({length:12}).map((_,i)=> <span key={i} className={`heart h${i}`}>❤️</span>)}
    </div>
  )
}
