import React, {useState, useEffect} from 'react'
import Confetti from 'react-confetti'
import FloatingHearts from '../../components/FloatingHearts/FloatingHearts'
import Fireworks from '../../components/Fireworks/Fireworks'
import GlassCard from '../../components/GlassCard/GlassCard'
import './Success.css'

export default function Success(){
  const [size, setSize] = useState({w: window.innerWidth, h: window.innerHeight})
  useEffect(()=>{
    const onR = ()=> setSize({w:window.innerWidth,h:window.innerHeight})
    window.addEventListener('resize', onR)
    return ()=> window.removeEventListener('resize', onR)
  },[])

  return (
    <div className="center-wrap">
      <GlassCard>
        <h2>Você acabou de deixar meu dia muito mais feliz! ❤️</h2>
      </GlassCard>
      <Confetti width={size.w} height={size.h} recycle={false} numberOfPieces={300} />
      <Fireworks />
      <FloatingHearts />
    </div>
  )
}
