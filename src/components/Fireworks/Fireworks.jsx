import React from 'react'
import './Fireworks.css'

export default function Fireworks(){
  return (
    <div className="fireworks" aria-hidden>
      {Array.from({length:6}).map((_,i)=> <span key={i} className={`burst b${i}`} />)}
    </div>
  )
}
