import React, {useEffect, useState} from 'react'
import './ProgressBar.css'

export default function ProgressBar({duration=3000,onFinish}){
  const [p,setP]=useState(0)
  useEffect(()=>{
    const start = Date.now()
    const tick = ()=>{
      const t = Date.now()-start
      const v = Math.min(100, Math.round((t/duration)*100))
      setP(v)
      if(t<duration) requestAnimationFrame(tick)
      else onFinish && onFinish()
    }
    tick()
  },[])

  return (
    <div className="progress-outer">
      <div className="progress-inner" style={{width: `${p}%`}} />
    </div>
  )
}
