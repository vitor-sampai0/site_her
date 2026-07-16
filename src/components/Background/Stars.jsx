import React, { useEffect, useRef } from 'react'
import './Stars.css'

export default function Stars(){
  const ref = useRef(null)

  useEffect(()=>{
    const canvas = ref.current
    if(!canvas) return
    const ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    const stars = Array.from({length:120}, ()=>({
      x: Math.random()*w,
      y: Math.random()*h,
      r: Math.random()*1.2+0.2,
      a: Math.random()
    }))

    function onResize(){ w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight }
    window.addEventListener('resize', onResize)

    let raf
    function draw(){
      ctx.clearRect(0,0,w,h)
      for(const s of stars){
        s.a += 0.01*Math.random()
        if(s.a>1) s.a=0
        ctx.beginPath()
        ctx.fillStyle = `rgba(255,255,255,${s.a*0.9})`
        ctx.arc(s.x, s.y, s.r, 0, Math.PI*2)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  },[])

  return <canvas className="stars-canvas" ref={ref} aria-hidden />
}
